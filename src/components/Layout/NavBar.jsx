import { useState, useEffect } from "react";
import Container from "../Container";
import { CloseIcon, MenuIcon } from "../Icons";

import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React, UnsupportedChainIdError } from "@web3-react/core";
import {
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected,
} from "@web3-react/injected-connector";
import { UserRejectedRequestError as UserRejectedRequestErrorWalletConnect } from "@web3-react/walletconnect-connector";

import { injected, POLLING_INTERVAL } from "../../dapp/connectors";
import { useEagerConnect, useInactiveListener } from "../../dapp/hooks";
import logger from "../../logger";
import toast from "react-hot-toast";

function getErrorMessage(error) {
  if (error instanceof NoEthereumProviderError) {
    return "No Ethereum browser extension detected, install MetaMask on desktop or visit from a dApp browser on mobile.";
  } else if (error instanceof UnsupportedChainIdError) {
    return "You're connected to an unsupported network.";
  } else if (
    error instanceof UserRejectedRequestErrorInjected ||
    error instanceof UserRejectedRequestErrorWalletConnect
  ) {
    return "Please authorize this website to access your Ethereum account.";
  } else {
    logger.error(error);
    return "An unknown error occurred. Check the console for more details.";
  }
}

export function getLibrary(provider) {
  const library = new Web3Provider(provider);
  library.pollingInterval = POLLING_INTERVAL;
  return library;
}

export default function NavBar() {
  const [show, setShow] = useState(false);

  const toggleMenu = () => setShow(!show);

  const context = useWeb3React();
  const { connector, activate, deactivate, active, error } = context;

  useEffect(() => {
    toast.error(getErrorMessage(error));
  }, [error]);

  // handle logic to recognize the connector currently being activated
  const [activatingConnector, setActivatingConnector] = useState();
  useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined);
    }
  }, [activatingConnector, connector]);

  // handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already
  const triedEager = useEagerConnect();

  // handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists
  useInactiveListener(!triedEager || !!activatingConnector);

  const activating = injected === activatingConnector;
  const connected = injected === connector;

  return (
    <Container className="flex gap-20 justify-between md:justify-start items-center h-28 relative z-40">
      <img className="md:h-32 h-24" src="/assets/logo1.png" alt="Logo" />
      <ul className="md:flex hidden  flex-1 justify-center gap-10 items-center ">
        <NavLink path="/#HOME" name="Home" />
        <NavLink path="/#ECOSYSTEM" name="Ecosystem" />
        <NavLink path="/#NFTS" name="Our NFTs" />
        <NavLink path="/#ROADMAP" name="Roadmap" />
        <NavLink path="/#TEAM" name="Our Team" />
      </ul>
      <button
        className="rounded-[12px] p-4 bg-gradient-to-r from-[#903EF7] to-[#387B96]"
        onClick={() => {
          if (active || error) {
            deactivate();
          } else {
            setActivatingConnector(injected);
            activate(injected);
          }
        }}
      >
        {activating && <p className="loading">loading...</p>}
        {connected && <p>Deactivate</p>}
        {!activating && !connected && <p>Connect with MetaMask</p>}
      </button>
      <button onClick={toggleMenu} className="md:hidden text-white text-2xl">
        <MenuIcon />
      </button>
      {show && (
        <div className="w-screen h-screen fixed inset-0 bg-background z-50 px-4">
          <div className="justify-end flex  h-28">
            <button
              onClick={toggleMenu}
              className="md:hidden text-white text-2xl"
            >
              <CloseIcon />
            </button>
          </div>

          <ul className="flex-col flex gap-6">
            <NavLink path="/#HOME" name="Home" />
            <NavLink path="/#ECOSYSTEM" name="Ecosystem" />
            <NavLink path="/#NFTS" name="Our NFTs" />
            <NavLink path="/#ROADMAP" name="Roadmap" />
            <NavLink path="/#TEAM" name="Our Team" />
          </ul>
        </div>
      )}
    </Container>
  );
}

export const NavLink = ({ name, path }) => {
  return (
    <li className="text-white hover:text-app-primary cursor-pointer">
      <a href={path}>{name}</a>
    </li>
  );
};
