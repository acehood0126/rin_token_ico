import React from "react";
import Button from "../Buttons";
import Container from "../Container";
import { ArrowRightIcon } from "../Icons";
import Heading, { Gradient } from "../Typography/Heading";
import Text from "../Typography/Text";

export default function FootBullNFT() {
  return (
    <Container className="my-40" id="NFTS">
      <div className="text-center space-y-4 flex flex-col items-center gap-6">
        <Heading className="text-6xl">
          <Gradient>Footbull</Gradient> x NFTs
        </Heading>
        <Text className="max-w-3xl mx-auto">
          Those wanting to play on the Footbull application and have a chance at
          winning a piece of the prize pools will need to open mystery boxes to
          play. To keep the platform democratic, players can do marketing tasks
          to be allocated free boxes, however for a better chance at better
          players & if you want to skip the tasks, players and investors will be
          able to pay to open boxes. 50% of the proceeds from NFT minting will
          be bought into the $FBull token. There will also be a reselling market
          of the cards, as more valuable players are sold for more.
        </Text>
        <Button>
          Explore More
          <ArrowRightIcon />
        </Button>
      </div>
    </Container>
  );
}
