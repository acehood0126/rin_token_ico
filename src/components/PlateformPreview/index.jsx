import React from "react";
import Container from "../Container";
import Heading from "../Typography/Heading";
import Text from "../Typography/Text";

export default function PlateformPreview() {
  return (
    <Container className="md:h-[460px] bg-[#272534] rounded-2xl mt-80">
      <div className="w-full h-full flex items-center lg:p-10 p-4 flex-col lg:flex-row">
        <div className="xl:w-1/2 w-full space-y-10">
          <div className="space-y-6 w-full">
            <Heading className="!text-left">
              The Footbull
              <span className="text-app-primary"> dApp</span>
            </Heading>
            <Text className="xl:w-96 w-full text-center xl:text-left">
              Deposits have already been placed on the development of the
              Footbull platform, and it is planned to have it's Alpha release 3
              weeks after the presale is finalised.
            </Text>
          </div>
        </div>
        <div className="xl:flex gap-10">
          <img className="w-full" src="/assets/images/mobile-app/mockup.png" />
        </div>
      </div>
    </Container>
  );
}
