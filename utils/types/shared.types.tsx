export interface DetailsProps {
  img: string;
  ens: string;
  address: string;
  level: number;
  socials: {
    content: React.ReactNode;
    url: string;
  }[];
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

