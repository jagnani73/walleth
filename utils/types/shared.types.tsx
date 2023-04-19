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
