import React from "react";
import Button from "../Buttons";
import Container from "../Container";
import { ArrowRightIcon } from "../Icons";
import { Gradient } from "../Typography/Heading";
import Text from "../Typography/Text";

export default function Banner() {
  return (
    <Container
      id="HOME"
      className="min-h-screen w-full flex items-center transform -translate-y-28"
    >
      <div className="w-[700px] h-[700px] bg-[#4E34EE]/10 filter blur-3xl absolute top-0 left-0 rounded-full transform -translate-x-1/2 -translate-y-1/3" />
      <div className="flex flex-col gap-y-20 gap-x-20 w-full pt-32 relative">
        <div>
          <h1 className="xl:w-[500px] font-bold text-6xl lg:text-8xl text-center xl:text-left text-white  xl:text-8xl leading-tight">
            Discover, collect, and sell rare{" "}
            <Gradient className="font-black">NFTs</Gradient>
          </h1>
        </div>
        <div className="flex flex-col gap-y-10 xl:flex-row xl:items-end items-center xl:absolute xl:left-1/2 xl:top-1/2 xl:-translate-y-60 xl:transform xl:-translate-x-10 ">
          <img
            className="xl:transform xl:-translate-y-14 xl:h-[700px]"
            alt=""
            src="/assets/images/footbull/3-transparent.png"
          />
          <div className="space-y-6 w-full flex flex-col items-center xl:items-start xl:w-80 xl:mb-28 xl:transform xl:-translate-x-20">
            <Text className="text-[#BEBEBE] text-center xl:text-left">
              Web3’s Fantasy Footbull platform. Mint, play & earn in a
              decentralized and flawless experience!
            </Text>
            <a href="http://t.me/footbullNFT" target="_blank">
              <Button>
                Get Involved
                <ArrowRightIcon />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}
