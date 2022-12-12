import React from "react";
import Container from "../Container";
import Heading from "../Typography/Heading";

export default function Team() {
  const users = [
    {
      name: "Elen Hendrics",
      position: "Founder",
      img: "/assets/images/users/user3.png",
    },
    {
      name: "David Samuels",
      position: "Incubation",
      img: "/assets/images/users/user2.png",
    },
    {
      name: "Leona Evans",
      position: "Advisor & Partner",
      img: "/assets/images/users/TOPGENTLEDEV.png",
    },
    {
      name: "Elen Hendrics",
      position: "Web3 Dev",
      img: "/assets/images/users/NEO.jpeg",
    },
  ];
  return (
    <Container id="TEAM" className="mt-60">
      <Heading className="text-5xl text-center">About Team</Heading>
      <div className="w-full  max-w-full">
        <div className="flex gap-10 mt-32 xl:mt-60 flex-wrap gap-y-20">
          {users.map((user, i) => {
            return <Card key={i} {...user} />;
          })}{" "}
        </div>
      </div>
    </Container>
  );
}

const Card = ({ name, img, position }) => {
  return (
    <div className="relative p-6 mx-auto bg-[#272534] min-w-[300px] flex w-80 pt-24 rounded-xl justify-center items-center">
      <div className="w-32 absolute top-0 left-1/2 h-32 transform -translate-x-1/2 rounded-xl -translate-y-1/2">
        <img src={img} className="w-full h-full rounded-full" />
      </div>
      <div>
        <h4 className="text-white text-xl text-center">{name}</h4>
        <h6 className="text-[#9E9E9E]">{position}</h6>
      </div>
    </div>
  );
};
