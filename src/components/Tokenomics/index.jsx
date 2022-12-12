import React from "react";
import Container from "../Container";
import Heading, { Gradient } from "../Typography/Heading";
import Text from "../Typography/Text";

export default function Tokenomics() {
  const data = [
    { amount: "1 Billion", text: "Total Supply" },
    { amount: "200M", text: "Locked development and ecosystem" },
    { amount: "400M", text: "Allocated to presale" },
    { amount: "10M", text: "Team Locked" },
    { amount: "200M", text: "Allocated for liqudity" },
  ];
  return (
    <Container className="my-20 mt-96">
      <Heading className="text-center text-6xl">Tokenomics</Heading>
      <div className="relative mt-20">
        <img className="w-full" src="/assets/images/world.png" />
        <div className="w-full h-full absolute inset-0 flex flex-col md:flex-row justify-between md:pt-28 gap-2 xl:gap-20">
          {data.map((d) => {
            return (
              <div className="flex flex-col transform even:translate-y-0 md:even:translate-y-40 items-center gap-4 w-full md:w-96 text-center">
                <h1 className="text-2xl font-bold lg:text-5xl">
                  {" "}
                  <Gradient>{d.amount}</Gradient>{" "}
                </h1>
                <Text>{d.text}</Text>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
}
