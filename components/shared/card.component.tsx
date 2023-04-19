import Image from "next/image";

import type { CardProps } from "#/utils/types/shared.types";
import { EthereumLogo } from "#/public/logos";

const Card: React.FC<CardProps> = ({ age, bought, floor, img, owner }) => {
  return (
    <article className="flex flex-col gap-y-4 rounded-lg bg-night p-1 pb-2">
      <figure className="relative">
        <Image
          src={img}
          alt={`bought by ${owner} at ${bought}`}
          width={193}
          height={193}
          className="rounded-[4px]"
        />
        <figcaption className="absolute bottom-1 right-1 rounded-[31px] bg-black bg-opacity-5 px-[6px] py-px text-xs font-medium text-white backdrop-blur-[3px]">
          <span className="leading-5">{age}</span>
        </figcaption>
      </figure>

      <div className="flex w-full flex-col gap-y-4 p-1">
        <p className="text-sm font-medium leading-5 text-seasalt">{owner}</p>

        <div className="flex justify-between">
          <p className="text-xs leading-5 text-silver">Bought</p>
          <p className="flex items-center gap-x-1">
            <span className="text-xs font-medium leading-5 text-seasalt">
              {bought}
            </span>
            <span className="flex h-3 w-3">
              <EthereumLogo />
            </span>
          </p>
        </div>

        <div className="flex justify-between">
          <p className="text-xs leading-5 text-silver">Floor</p>
          <div className="flex gap-x-1">
            <p className="flex items-center gap-x-1">
              <span className="text-xs font-medium leading-5 text-seasalt">
                {floor.value}
              </span>
              <span className="flex h-3 w-3">
                <EthereumLogo />
              </span>
            </p>

            <p
              className={`${
                floor.increment ? "text-spring-green" : ""
              } text-xs font-medium`}
            >
              {floor.increment ? "+" : "-"}
              {floor.percentage}%
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Card;
