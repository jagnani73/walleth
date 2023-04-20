import Image from "next/image";

import type { HighlightProps } from "#/utils/types/shared.types";
import { EthereumLogo } from "#/public/logos";

const HighlightComponent: React.FC<HighlightProps> = ({
  age,
  collection,
  cost,
  img,
  owner,
  status,
  xp,
}) => {
  return (
    <article className="relative flex min-w-[202px] flex-col gap-y-6 overflow-hidden rounded-2xl bg-night p-[10px]">
      <div className="absolute left-8 top-4 h-44 w-44 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-pacific-cyan-10 blur-xl" />

      <div className="z-10 flex w-full gap-x-3">
        <figure className="flex min-w-fit">
          <Image
            src={img}
            alt={`NFT from ${collection} @ wall.app`}
            className="rounded-lg"
            width={52}
            height={52}
          />
        </figure>

        <div className="flex w-full flex-col gap-y-2 truncate">
          <p className="flex w-full truncate">
            <span className="truncate text-sm font-medium leading-5 text-seasalt">
              {collection}
            </span>
          </p>
          <p className="px-2 py-1 text-xs leading-5 text-spring-green">
            {status}
          </p>
        </div>
      </div>

      <div className="flex w-full flex-col gap-y-2">
        <div className="flex justify-between">
          <p className="text-xs font-medium leading-5 tracking-[0.05px] text-silver">
            {owner}
          </p>
          <p className="flex items-center gap-x-1">
            <span className="text-xs font-medium leading-5 text-seasalt">
              {cost}
            </span>
            <span className="flex h-3 w-3">
              <EthereumLogo />
            </span>
          </p>
        </div>

        <div className="flex justify-between">
          <p className="text-xs leading-5 text-silver">{age}</p>
          <p className="text-xs leading-5 text-spring-green">+{xp}XP</p>
        </div>
      </div>
    </article>
  );
};

export default HighlightComponent;
