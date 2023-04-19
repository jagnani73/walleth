import {
  CardProps,
  DetailsProps,
  HighlightProps,
} from "#/utils/types/shared.types";
import { useMemo } from "react";
import { CardComponent, DetailsComponent, HighlightComponent } from "../shared";
import { NFT_STATUS } from "#/utils/constants/shared.constants";

const HomeScreen: React.FC = () => {
  const DETAILS = useMemo<DetailsProps[]>(
    () => [
      {
        address: "0x83C1B24e8CB73D165787dcEb9A6B2D8J6d5188fD",
        communities: ["/nft.png", "/nft.png", "/nft.png"],
        description:
          "An Investor / Collector of #NFTs and OG enthusiast. Co-Founder and owner of 📦  @nftboxes",
        ens: "dingaling.eth",
        img: "/nft.png",
        level: 3,
        socials: [
          {
            content: "dingaling",
            url: "https://twitter.com",
          },
        ],
        traits: [
          {
            name: "Art",
            percentage: 12,
            special: true,
          },
          {
            name: "Utility",
            percentage: 12,
            special: true,
          },
          {
            name: "PFP",
            percentage: 12,
            special: false,
          },
          {
            name: "Metaverse",
            percentage: 12,
            special: false,
          },
        ],
      },
    ],
    []
  );

  const CARDS = useMemo<CardProps[]>(
    () => [
      {
        age: "3 months",
        bought: 12.82,
        floor: {
          percentage: 21.6,
          increment: true,
          value: 12.74,
        },
        img: "/nft.png",
        owner: "Azuki #9839",
      },
      {
        age: "3 months",
        bought: 12.82,
        floor: {
          percentage: 21.6,
          increment: true,
          value: 12.74,
        },
        img: "/nft.png",
        owner: "Azki #9839",
      },
      {
        age: "3 months",
        bought: 12.82,
        floor: {
          percentage: 21.6,
          increment: true,
          value: 12.74,
        },
        img: "/nft.png",
        owner: "Azufki #9839",
      },
    ],
    []
  );

  const HIGHLIGHTS = useMemo<HighlightProps[]>(
    () => [
      {
        age: "10 days ago",
        collection: "ENS Linked",
        cost: 95.2,
        img: "/nft.png",
        owner: "CryptoPunk #2131",
        status: NFT_STATUS.ENS_LINKED,
        xp: 200,
      },
      {
        age: "10 days ago",
        collection: "Best Flip",
        cost: 95.2,
        img: "/nft.png",
        owner: "CryptoPunk #2131",
        status: NFT_STATUS.SOLD,
        xp: 200,
      },
      {
        age: "10 days ago",
        collection: "Should have been sold",
        cost: 95.2,
        img: "/nft.png",
        owner: "CryptoPunk #2131",
        status: NFT_STATUS.MINT,
        xp: 200,
      },
      {
        age: "10 days ago",
        collection: "First NFT bought",
        cost: 95.2,
        img: "/nft.png",
        owner: "CryptoPunk #2131",
        status: NFT_STATUS.BOUGHT,
        xp: 200,
      },
    ],
    []
  );

  return (
    <main>
      <div className="mt-8 flex gap-x-8">
        {HIGHLIGHTS.map((highlight) => (
          <HighlightComponent key={highlight.collection} {...highlight} />
        ))}
      </div>

      <div className="mt-8 flex gap-x-8">
        {CARDS.map((card) => (
          <CardComponent key={card.bought} {...card} />
        ))}
      </div>

      <div className="mt-8 flex gap-x-8">
        {DETAILS.map((details) => (
          <DetailsComponent key={details.address} {...details} />
        ))}
      </div>
    </main>
  );
};

export default HomeScreen;
