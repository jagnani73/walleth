import { DetailsProps } from "#/utils/types/shared.types";
import { useMemo } from "react";
import { DetailsComponent } from "../shared";

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

  return (
    <main>
      {DETAILS.map((details) => (
        <DetailsComponent key={details.address} {...details} />
      ))}
    </main>
  );
};

export default HomeScreen;
