import Image from "next/image";

import type { DetailsProps } from "#/utils/types/shared.types";
import { Truncate } from "#/utils/functions";
import { DoubleChevronRightIcon } from "#/public/icons";

const DetailsComponent: React.FC<DetailsProps> = ({
  address,
  communities,
  description,
  ens,
  img,
  level,
  socials,
  traits,
}) => {
  return (
    <article className="flex w-[292px] flex-col gap-y-8 rounded-2xl bg-night p-4 pb-6">
      <div className="flex w-full items-center gap-x-3">
        <figure className="flex flex-col items-center gap-y-1">
          <Image
            src={img}
            alt={`${ens} @ wall.app`}
            width={72}
            height={72}
            className="rounded-full border-2 border-night"
          />
          <figcaption className="w-fit rounded-[44px] bg-orange-web-10 p-2 text-xs font-semibold text-xanthous">
            LVL {level}
          </figcaption>
        </figure>

        <div>
          <h2 className="text-xl font-medium text-white">{ens}</h2>
          <h4 className="text-xs text-silver">{Truncate(address)}</h4>
        </div>
      </div>

      <p className="text-sm text-silver">{description}</p>

      <div className="flex w-full flex-col gap-y-2">
        <p className="text-xs text-silver">
          Common communities ({communities.length})
        </p>
        <div className="flex flex-wrap gap-2">
          {communities.map((community) => (
            <Image
              key={`${community}${Math.random()}`}
              src={community}
              alt="community @ wall.app"
              width={48}
              height={48}
              className="rounded-lg"
            />
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {traits.map(({ name, percentage, special }) => (
          <p
            key={name}
            className={`${
              special
                ? "border-xanthous text-xanthous"
                : "border-eerie-black text-silver"
            } flex gap-x-2 rounded-[40px] border px-[10px] py-[6px] text-xs font-medium`}
          >
            <span>{name}</span>
            <span>{percentage}</span>
          </p>
        ))}
      </div>

      <button
        type="button"
        className="flex w-full items-center justify-center gap-2 rounded-3xl border border-silver py-3 text-seasalt"
      >
        Subscribe{" "}
        <span className="flex h-4 w-4">
          <DoubleChevronRightIcon />
        </span>
      </button>
    </article>
  );
};

export default DetailsComponent;
