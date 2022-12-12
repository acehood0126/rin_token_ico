import React from "react";
import Container from "../Container";
import Heading from "../Typography/Heading";
import Text from "../Typography/Text";

export default function About() {
  return (
    <Container
      id="INTRUDUCTION"
      className="about flex flex-col items-center gap-8 lg:flex-row relative"
    >
      <div className="lg:w-1/2  pr-52 w-full overflow-hidden">
        <img
          className="w-full h-full object-cover rounded-lg"
          src="/assets/image 21.png"
          alt=""
        />

        {/* <div className="w-60 h-72 transform translate-x-[80%] -translate-y-1/4 -rotate-6 bg-white/10 p-4 overflow-hidden rounded-xl">
          <img
            className="w-full h-full object-cover rounded-lg"
            src="/assets/images/footbull/4.png"
            alt=""
          />
        </div> */}
      </div>
      <div className="w-[800px] h-[800px] bg-[#4E34EE]/10 filter blur-3xl absolute top-0 left-0 rounded-full transform -translate-x-2/3 -translate-y-20" />
      <div className="w-full lg:w-1/2">
        <p className="txt">About Us</p>
        <Heading className="text-7xl leading-tight !text-left">
          Get to know Us <br />
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
        <div className="flex gap-8 mt-20 flex-col md:flex-row justify-center lg:flex-row gap-y-20 ">
          <button className="btn">Explore</button>
        </div>

        {/* <div className="flex gap-8 mt-20 flex-col md:flex-row justify-center lg:flex-row gap-y-20 ">
          <Card>1.5% Prize Pool Tax in BNB</Card>
          <Card>1.5% Prize Pool Tax in Tokens</Card>
          <Card>3% Marketing/Development Cost in BNB</Card>
        </div> */}
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
