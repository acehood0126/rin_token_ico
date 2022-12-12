import React from "react";
import Container from "../Container";
import Heading from "../Typography/Heading";
import Text from "../Typography/Text";
import Timeline from "./Timeline";

export default function RoadMap() {
  return (
    <Container id="ROADMAP" className="my-20 mt-60">
      <Heading className="text-center text-5xl">
        <span className="text-app-primary">Roadmap</span>x Expansion Plans
      </Heading>
      <div className="flex justify-center mt-40">
        <RoadMapComponent />
      </div>
    </Container>
  );
}

function RoadMapComponent() {
  return (
    <ul className="">
      <Timeline title="November">
        <p>
          <Text color="#ffffff">- First website release</Text>
        </p>
        <p>
          <Text farewell name="Francisco">
            - Socials Set-Up. First posts.
          </Text>
        </p>
        <p>
          <Text farewell name="Francisco">
            - Whitepaper release
          </Text>
        </p>
        <p>
          <Text farewell name="Francisco">
            - Initial seed raise (60BNB)
          </Text>
        </p>
        <p>
          <Text farewell name="Francisco">
            - Partner announcements (Web3 & Web2)
          </Text>
        </p>
        <p>
          <Text farewell name="Francisco">
            - Token Contract release, KYC release, audit release.
          </Text>
        </p>
      </Timeline>
      <Timeline title="December">
        <p>
          <Text color="#ffffff">
            - Partnership announcement with football team(s)
          </Text>
        </p>
        <p>
          <Text farewell name="Francisco">
            - Partnership announcements with real football player(s)
          </Text>
        </p>
        <p>
          <Text farewell name="Francisco">
            - Posts across Football Instagram pages (e.g Sportsbible, X7Updates)
          </Text>
        </p>
        <p>
          <Text farewell name="Francisco">
            - Pinksale Fair Launch: 3rd December
          </Text>
        </p>
        <p>
          <Text farewell name="Francisco">
            - Traditional Web3 Post-launch marketing, CG/CMC listings, BSCScan
            listings.
          </Text>
        </p>
        <p>
          <Text farewell name="Francisco">
            - NFT Launch as an opportunity to build squads before the platform
            is released.
          </Text>
        </p>
        <p>
          <Text farewell name="Francisco">
            - Platform ‘Alpha’ Release: 26th December, alongside Premier League
            start.
          </Text>
        </p>
      </Timeline>
      <Timeline title="January">
        <p>
          <Text color="#ffffff">- First CEX Listing</Text>
        </p>
        <p>
          <Text farewell name="Francisco">
            - PWeb2 advertising
          </Text>
        </p>
        <p>
          <Text farewell name="Francisco">
            - Mainstream adoption plan deployed
          </Text>
        </p>
        <p>
          <Text farewell name="Francisco">
            - More Partnerships with footballers & teams
          </Text>
        </p>
        <p>
          <Text farewell name="Francisco">
            - Platform taken cross-chain to Ethereum.
          </Text>
        </p>
        <p>
          <Text farewell name="Francisco">
            - Development previews of ‘Basketbull’.
          </Text>
        </p>
      </Timeline>
    </ul>
  );
}
