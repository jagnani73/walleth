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
        address: "0xadgfB24e8CB73D165787dcEb9A6B2D8J6d51jkld",
        communities: ["/nfts/details/community 1.png", "/nfts/details/community 2.png", "/nfts/details/community 3.png", "/nfts/details/community 4.png"],
        description:
          "An Investor / Collector of #NFTs and OG enthusiast. Co-Founder and owner of 📦  @nftboxes",
        ens: "dingaling.eth",
        img: "/nfts/details/dp 1.png",
        level: 2,
        socials: {
          twitter: {
            username: "dingalingts",
            url: "https://twitter.com",
          },
          website: "https://website.com",
        },
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
          }, {
            name: "Gaming",
            percentage: 12,
            special: false,
          },
          {
            name: "PFP",
            percentage: 12,
            special: false,
          },
          {
            name: "ens",
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
        bought: 2.82,
        floor: {
          percentage: 21.6,
          increment: true,
          value: 12.74,
        },
        img: "/nfts/cards/nft 1.png",
        owner: "Azuki #9839",
      },
      {
        age: "3 months",
        bought: 2.82,
        floor: {
          percentage: 21.6,
          increment: true,
          value: 12.74,
        },
        img: "/nfts/cards/nft 2.png",
        owner: "MAYC #9839",
      },
      {
        age: "3 months",
        bought: 2.82,
        floor: {
          percentage: 21.6,
          increment: true,
          value: 12.74,
        },
        img: "/nfts/cards/nft 3.png",
        owner: "MoonBirds #9839",
      }, {
        age: "3 months",
        bought: 2.82,
        floor: {
          percentage: 21.6,
          increment: true,
          value: 12.74,
        },
        img: "/nfts/cards/nft 4.png",
        owner: "Otherdeed #9839",
      }, {
        age: "3 months",
        bought: 2.82,
        floor: {
          percentage: 21.6,
          increment: true,
          value: 12.74,
        },
        img: "/nfts/cards/nft 5.png",
        owner: "Cryptoz #9839",
      },
    ],
    []
  );

  const HIGHLIGHTS = useMemo<HighlightProps[]>(
    () => [
      {
        age: "2 months ago",
        collection: "ENS Linked",
        cost: 1.82,
        img: "/nfts/highlights/nft 1.png",
        owner: "dingaling.eth",
        status: NFT_STATUS.ENS_LINKED,
        xp: 200,
      },
      {
        age: "10 days ago",
        collection: "Best Flip",
        cost: 95.2,
        img: "/nfts/highlights/nft 2.png",
        owner: "CryptoPunk #2131",
        status: NFT_STATUS.SOLD,
        xp: 150,
      },
      {
        age: "10 days ago",
        collection: "Should have sold",
        cost: 98.5,
        img: "/nfts/highlights/nft 3.png",
        owner: "Rare Apepe #6974",
        status: NFT_STATUS.MINT,
        xp: 200,
      },
      {
        age: "10 days ago",
        collection: "First NFT bought",
        cost: 98.5,
        img: "/nfts/highlights/nft 4.png",
        owner: "BAYC #7925",
        status: NFT_STATUS.BOUGHT,
        xp: 10,
      },
      {
        age: "10 days ago",
        collection: "Paper Handed",
        cost: 98.5,
        img: "/nfts/highlights/nft 5.png",
        owner: "Moonbird #7866",
        status: NFT_STATUS.SOLD,
        xp: 200,
      },
    ],
    []
  );

  return (
    <main className="flex w-full flex-col">
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
