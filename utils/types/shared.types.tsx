import type { NFT_STATUS } from "../constants/shared.constants";

export interface DetailsProps {
  img: string;
  ens: string;
  address: string;
  level: number;
  socials: {
    twitter: {
      username: string;
      url: string;
    };
    website: string;
  };
  description: string;
  communities: string[];
  traits: {
    name: string;
    percentage: number;
    special: boolean;
  }[];
}

export interface CardProps {
  img: string;
  age: string;
  owner: string;
  bought: number;
  floor: {
    value: number;
    percentage: number;
    increment: boolean;
  };
}

export interface HighlightProps {
  collection: string;
  status: NFT_STATUS;
  img: string;
  owner: string;
  cost: number;
  age: string;
  xp: number;
}
