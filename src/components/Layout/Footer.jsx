import React from "react";
import Container from "../Container";
import { TelegramIcon, TwitterIcon, WebIcon } from "../Icons";
import Text from "../Typography/Text";
import { NavLink } from "./NavBar";

export default function Footer() {
  return (
    <Container className="mt-60 space-y-10">
      <div className="flex flex-col md:flex-row gap-10 justify-between md:items-center">
        <ul className="flex flex-col md:flex-row  gap-10 gap-y-6 md:items-center ">
          <NavLink path="/#HOME" name="Home" />
          <NavLink path="/#ECOSYSTEM" name="Ecosystem" />
          <NavLink path="/#NFTS" name="Our NFTs" />
          <NavLink path="/#ROADMAP" name="Roadmap" />
          <NavLink path="/#TEAM" name="Our Team" />
        </ul>
        <div className="flex gap-4 items-center">
          <SocialIcon
            icon={<TelegramIcon className="text-[#B4B4B7] text-3xl" />}
          />
          <SocialIcon icon={<WebIcon />} />
          <SocialIcon icon={<TwitterIcon />} />
        </div>
      </div>
      <div className="py-10 border-t border-white">
        <Text className="text-center">
          Copyright © 2022 FootBull All Rights Reserved.
        </Text>
      </div>
    </Container>
  );
}

const SocialIcon = ({ icon }) => {
  const Icon = () => icon;
  return (
    <div className="border border-white p-3 w-12 h-12 rounded-full flex justify-center items-center">
      <Icon />
    </div>
  );
};
