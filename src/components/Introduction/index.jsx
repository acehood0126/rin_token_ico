import { useState, useEffect } from "react";
import { formatUnits, parseUnits } from "@ethersproject/units";
import { Web3Provider } from "@ethersproject/providers";
import { toast } from "react-hot-toast";
import { useWeb3React } from "@web3-react/core";
import { BigNumber, ethers, utils } from "ethers";
import { useQuery } from "react-query";

import logger from "../../logger";

import Container from "../Container";
import Heading from "../Typography/Heading";
import Text from "../Typography/Text";

import USDTArtifacts from "../../abis/USDT.json";
import RINTokenArtifacts from "../../abis/RINToken.json";
import RINTokenCrowdSaleArtifacts from "../../abis/RINTokenCrowdSale.json";

const providerUrl = process.env.REACT_APP_GOERLI_PROVIDER_URL;
const presalePercent = 15;

export default function Introduction() {
  const [tokenAmount, setTokenAmount] = useState(0);
  const [currentPayment, setCurrentPayment] = useState(true);
  const [currentPercent, setCurrentPercent] = useState(0);

  const { library, chainId, account } = useWeb3React();
  const [tokenAddress, setTokenAddress] = useState("");
  const [availableForSale, setAvailableForSale] = useState("0");
  const [priceInUsdt, setPriceInUsdt] = useState("0");
  const [priceInEth, setPriceInEth] = useState("0");
  const [closingTime, setClosingTime] = useState("0");
  const [amount, setAmount] = useState(0);
  const [amountUsdt, setAmountUsdt] = useState(0);

  async function requestAccount() {
    if (window.ethereum?.request)
      return window.ethereum.request({ method: "eth_requestAccounts" });

    throw new Error(
      "Missing install Metamask. Please access https://metamask.io/ to install extension on your browser"
    );
  }

  const fetchTokenInfo = async () => {
    logger.warn("fetchTokenInfo");
    const provider =
      library || new Web3Provider(window.ethereum || providerUrl);
    const tokenContract = new ethers.Contract(
      RINTokenArtifacts.address,
      RINTokenArtifacts.abi,
      provider
    );
    const name = await tokenContract.name();
    const symbol = await tokenContract.symbol();
    const decimals = await tokenContract.decimals();
    const totalSupply = await tokenContract.totalSupply();
    logger.warn("token info", { name, symbol, decimals });
    return {
      name,
      symbol,
      decimals,
      totalSupply,
    };
  };

  const { error, isLoading, data } = useQuery(
    ["token-info", RINTokenArtifacts.address],
    fetchTokenInfo,
    {
      enabled: RINTokenArtifacts.address !== "",
    }
  );

  // fetch crowdsale token info
  const fetchCrowdsaleTokenInfo = () => {
    logger.warn("fetchCrowdsaleTokenInfo");
    const provider =
      library || new Web3Provider(window.ethereum || providerUrl);
    const contract = new ethers.Contract(
      RINTokenCrowdSaleArtifacts.address,
      RINTokenCrowdSaleArtifacts.abi,
      provider
    );
    contract.token().then(setTokenAddress).catch(logger.error);
    contract
      .remainingTokens()
      .then((total) => {
        setAvailableForSale(BigNumber.from(total).toString());
      })
      .catch(logger.error);
    contract
      .priceInUsdt()
      .then((res) => {
        setPriceInUsdt(BigNumber.from(res).toString());
        setCurrentPercent(
          BigNumber.from(res)
            .mul(100)
            .div(BigNumber.from(data.totalSupply).mul(presalePercent).div(100))
        );
      })
      .catch(logger.error);
    contract
      .priceInEth()
      .then((res) => {
        setPriceInEth(BigNumber.from(res).toString());
      })
      .catch(logger.error);
    contract
      .closingTime()
      .then((time) => setClosingTime(BigNumber.from(time).toString()))
      .catch(logger.error);
  };

  useEffect(() => {
    try {
      fetchCrowdsaleTokenInfo();
    } catch (error) {
      logger.error(error);
    }
  }, [data, library]);

  // buy token base on quantity
  const buyTokensWithEth = async () => {
    const provider =
      library || new Web3Provider(window.ethereum || providerUrl);
    const signer = provider.getSigner();
    try {
      if (!account) {
        await requestAccount();
        return;
      }
      const txPrams = {
        to: RINTokenCrowdSaleArtifacts.address,
        value: parseUnits(totalCostEth, 18),
        gasLimit: 5000000,
      };

      logger.warn({ txPrams });
      const transaction = await signer.sendTransaction(txPrams);
      toast.promise(transaction.wait(), {
        loading: `Transaction submitted. Wait for confirmation...`,
        success: <b>Transaction confirmed!</b>,
        error: <b>Transaction failed!.</b>,
      });

      // refetch total token after processing
      transaction
        .wait()
        .then(() => {
          fetchCrowdsaleTokenInfo();
        })
        .catch(logger.error);
    } catch (error) {
      logger.error(error);
    }
  };

  // buy token base on quantity
  const buyTokensWithUsdt = async () => {
    const provider =
      library || new Web3Provider(window.ethereum || providerUrl);
    const signer = provider.getSigner();
    try {
      if (!account) {
        await requestAccount();
        return;
      }

      const usdtContract = new ethers.Contract(
        USDTArtifacts.address,
        USDTArtifacts.abi,
        signer
      );
      const tx = await usdtContract.approve(
        RINTokenCrowdSaleArtifacts.address,
        ethers.BigNumber.from(priceInUsdt).mul(amountUsdt)
      );

      toast.promise(tx?.wait(), {
        loading: `Transaction submitted. Wait for confirmation...`,
        success: <b>Transaction confirmed!</b>,
        error: <b>Transaction failed!.</b>,
      });
      tx?.wait()
        .then((res) => {
          const RINTokenCrowdSaleContract = new ethers.Contract(
            RINTokenCrowdSaleArtifacts.address,
            RINTokenCrowdSaleArtifacts.abi,
            signer
          );
          const callCrowSaleBuyToken = async () => {
            const userAddress = await signer.getAddress();
            const crowdSaleTx =
              await RINTokenCrowdSaleContract.buyTokensUsingUsdt(
                userAddress,
                parseUnits(totalCostUsdt, 18)
              );

            logger.warn({ crowdSaleTx });
            toast.promise(crowdSaleTx?.wait(), {
              loading: `Transaction submitted. Wait for confirmation...`,
              success: <b>Transaction confirmed!</b>,
              error: <b>Transaction failed!.</b>,
            });

            crowdSaleTx
              .wait()
              .then(() => {
                fetchCrowdsaleTokenInfo();
              })
              .catch(logger.error);
          };
          callCrowSaleBuyToken();
        })
        .catch((err) => {
          console.log(err);
          toast.error("An error encountered");
        });
    } catch (error) {
      logger.error(error);
    }
  };

  const totalCostEth = (
    Number(formatUnits(priceInEth, 18)) * tokenAmount
  ).toString();
  const totalCostUsdt = (
    Number(formatUnits(priceInUsdt, 18)) * tokenAmount
  ).toString();

  return (
    <Container
      id="INTRUDUCTION"
      className="intro flex flex-col items-center gap-8 lg:flex-row relative"
    >
      <div className="w-[800px] h-[800px] bg-[#4E34EE]/10 filter blur-3xl absolute top-0 left-0 rounded-full transform -translate-x-2/3 -translate-y-20" />
      <div className="w-full lg:w-1/2">
        <Heading className="text-7xl leading-tight !text-left">
          Buy, Sell & Accept Digital Assets <br />
        </Heading>
        <div className="space-y-4 mt-8 text-center lg:text-left">
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            ultricies ligula sed ma gna dictum porta. Lorem ipsum dolor sit
            amet, consectetur adipiscing el.
          </Text>
          {/* <Text>
            We plan to launch with a 9% sell tax, which will decrease 1% a week
            for 3 weeks until it reaches our normal tax rate of 6% The platform
            launch will also be 3 weeks after the presale.
          </Text> */}
        </div>
        <div className="flex gap-8 mt-20 flex-col md:flex-row justify-center lg:flex-row gap-y-20">
          <button className="btn-left mt-20">See More</button>
        </div>

        {/* <div className="flex gap-8 mt-20 flex-col md:flex-row justify-center lg:flex-row gap-y-20 ">
          <Card>1.5% Prize Pool Tax in BNB</Card>
          <Card>1.5% Prize Pool Tax in Tokens</Card>
          <Card>3% Marketing/Development Cost in BNB</Card>
        </div> */}
      </div>
      <div>
        <div className="contain rounded-xl">
          <div className="box apeInfo h-75 mt-lg-0 mt-md-4">
            <h2 className="box-heading">PRESALE IS LIVE</h2>
            <p className="box-txt">
              {error && "Failed to load"}
              {isLoading && "Loading..."}
              {!error &&
                !isLoading &&
                `Available for sale : ${utils.commify(
                  formatUnits(availableForSale, 18)
                )}`}
            </p>
            <div className="w-full flex flex-row justify-center px-14 py-3">
              <div className="w-full h-[30px] rounded-full bg-[#162041]">
                <div
                  className={`h-full rounded-full transition-all bg-gradient-to-r from-[#8347E9] to-[#3F769D] flex flex-row justify-center items-center`}
                  style={{
                    width: `${currentPercent}%`,
                    transition: "all 0.2s",
                  }}
                ></div>
              </div>
            </div>
            <p className="box-txt">$Rin remaining {100 - currentPercent}%</p>
            <div className="w-full flex flex-col justify-center items-center">
              <div className="mintData">
                <div className="flex-auto">
                  <p>Pay With</p>
                  <input
                    value={currentPayment ? totalCostUsdt : totalCostEth}
                    readOnly={true}
                    className="bg-white/0 font-bold outline-none w-full"
                  />
                </div>
                <button
                  className="font-bold flex flex-col items-center uppercase"
                  onClick={() => {
                    setCurrentPayment(!currentPayment);
                  }}
                >
                  <img
                    src={`/assets/coins/${currentPayment ? "usdt" : "eth"}.png`}
                    className="w-[35px]"
                    alt=""
                  />
                  {currentPayment ? "usdt" : "eth"}
                </button>
              </div>
              <div className="mintData">
                <div className="flex-auto">
                  <p>Get</p>
                  <input
                    value={tokenAmount}
                    className="bg-white/0 font-bold outline-none w-full"
                    onChange={(e) => {
                      setTokenAmount(e.target.value);
                    }}
                    onKeyPress={(event) => {
                      if (!/[0-9]/.test(event.key)) {
                        event.preventDefault();
                      }
                    }}
                  />
                </div>
                <button className="font-bold flex flex-col items-center uppercase">
                  <img
                    src="/assets/coins/msg.png"
                    className="w-[35px]"
                    alt=""
                  />
                  RIN
                </button>
              </div>
            </div>
            <h5 className="mint-txt">
              1 RIN ={" "}
              {currentPayment
                ? `${utils.commify(formatUnits(priceInUsdt, 18))} USDT`
                : `${utils.commify(formatUnits(priceInEth, 18))} ETH`}
            </h5>
            <div className="bt">
              <button
                href="#"
                className="btn1"
                onClick={() => {
                  currentPayment ? buyTokensWithUsdt() : buyTokensWithEth();
                }}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
        <div className="w-60 h-96 transform translate-x-[80%] -translate-y-1/4 -rotate-6  p-4 overflow-hidden rounded-xl"></div>
      </div>
    </Container>
  );
}

const Card = ({ children }) => {
  return (
    <div className="relative p-4 bg-white/10 flex w-full md:w-max pt-14 rounded-3xl items-center">
      <img
        className="h-28 absolute top-0 left-0 transform -translate-y-1/2"
        src="/assets/Moneymanagement.png"
        alt=""
      />
      <div className="text-white text-sm">{children}</div>
    </div>
  );
};
