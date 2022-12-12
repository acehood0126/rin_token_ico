import React from "react";
import Container from "../Container";
import { ColumnIcon, ShareIcon, TaxIcon } from "../Icons";
import Heading, { Gradient } from "../Typography/Heading";
import Text from "../Typography/Text";

export default function EcoSystem() {
  return (
    <Container
      id="ECOSYSTEM"
      className="eco flex flex-col items-center gap-8 lg:flex-row relative"
    >
      <div className="text-center space-y-4">
        <p className="txt !text-left">UTILITIES</p>
        <Heading className="text-7xl leading-tight !text-left">
          Our trusted <br />
          Cryptocurrency platform <br />
        </Heading>
        <Text className="max-w-2xl wid mx-auto !text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
          ultricies ligula sed ma gna dictum porta. Lorem ipsum dolor sit amet,
          consectetur adipiscing el.
        </Text>
        <div className="flex gap-8 mt-20 flex-col md:flex-row justify-center lg:flex-row gap-y-20 ">
          <button className="util-btn">Explore</button>
        </div>
      </div>
      <div className="flex gap-10 mt-48 flex-col gap-y-20 md:flex-row lg:w-1/2  pr-52 w-full ">
        <Card1 className="card1">
          Real-time price data
          <p>Lorem ipsum dolor sit amet. </p>
        </Card1>
        <Card2 icon={<ShareIcon />}>
          Real-time price data
          <p>Lorem ipsum dolor sit amet. </p>
        </Card2>
        <Card3 icon={<ColumnIcon />}>
          Real-time price data
          <p>Lorem ipsum dolor sit amet. </p>
        </Card3>
      </div>
    </Container>
  );
}

const Card1 = ({ children, icon }) => {
  const Icon = () => icon;
  return (
    <div className=" card1 relative p-6  bg-[#272534]border-l border-l-[#C2CFE8] flex md:w-max w-full pt-24 transform md:even:-translate-y-1/2 rounded-xl flex-1 justify-center items-center">
      <img className="card-image" src="/assets/wallet.png" alt="" />
      <div className="text-white text-xl text-center">{children}</div>
    </div>
  );
};

const Card2 = ({ children, icon }) => {
  const Icon = () => icon;
  return (
    <div className=" card2 relative p-6  bg-[#272534]border-l border-l-[#C2CFE8] flex md:w-max w-full pt-24 transform md:even:-translate-y-1/2 rounded-xl flex-1 justify-center items-center">
      <img className="card-image" src="/assets/bag.png" alt="" />
      <div className="text-white text-xl text-center">{children}</div>
    </div>
  );
};

const Card3 = ({ children, icon }) => {
  const Icon = () => icon;
  return (
    <div className="card3 relative p-6  border-l border-l-[#C2CFE8] flex md:w-max w-full pt-24 transform md:even:-translate-y-1/2 rounded-xl flex-1 justify-center items-center">
      <img className="card-image" src="/assets/arrow.png" alt="" />
      <div className="text-white text-xl text-center">{children}</div>
    </div>
  );
};
