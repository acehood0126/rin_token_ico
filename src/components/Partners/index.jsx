import React from "react";
import Container from "../Container";
import Heading from "../Typography/Heading";

export default function Partner() {
  const logos = [
    "/assets/images/logos/logo1.png",
    "/assets/images/logos/logo2.png",
    "/assets/images/logos/logo3.png",
    "/assets/images/logos/logo4.png",
    "/assets/images/logos/logo5.png",
  ];
  return (
    <Container className="mt-60 mb-20">
      <Heading className="text-5xl text-center">Our Partners</Heading>
      <div className="flex gap-10 mt-20 flex-wrap justify-center">
        {logos.map((img, i) => {
          return <img className="h-20" key={i} src={img} />;
        })}
      </div>
    </Container>
  );
}
