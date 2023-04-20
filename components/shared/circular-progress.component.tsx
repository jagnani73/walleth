import { useMemo } from "react";

import type { CircularProgressProps } from "#/utils/types/shared.types";

const CircularProgress: React.FC<CircularProgressProps> = ({
  percentage,
  baseColor,
  highlightColor,
  image,
  className = "",
}) => {
  const RADIUS = useMemo<number>(() => 45, []);
  const CIRCUMFERENCE = useMemo<number>(() => 2 * Math.PI * RADIUS, [RADIUS]);
  const OFFSET = useMemo<number>(
    () => CIRCUMFERENCE - (percentage / 100) * CIRCUMFERENCE,
    [CIRCUMFERENCE, percentage]
  );

  return (
    <svg
      viewBox="0 0 100 100"
      className={`duration-5000 h-[84px] w-[84px] transition-all ${className}`}
    >
      <defs>
        <clipPath id="circleClip">
          <circle cx="50" cy="50" r={RADIUS - 1} fill="white" />
        </clipPath>
      </defs>
      <circle
        cx="50"
        cy="50"
        r={RADIUS}
        fill="transparent"
        stroke={baseColor}
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray={`${CIRCUMFERENCE} ${CIRCUMFERENCE}`}
        strokeDashoffset="0"
        className="duration-5000 transition-all"
      />
      <circle
        cx="50"
        cy="50"
        r={RADIUS}
        fill="transparent"
        stroke={highlightColor}
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray={`${CIRCUMFERENCE} ${CIRCUMFERENCE}`}
        strokeDashoffset={OFFSET}
        transform="rotate(-90) translate(-100) rotate(180 50 50)"
        className="duration-5000 transition-all"
      />
      <image
        href={image}
        x="12"
        y="12"
        height="76"
        width="76"
        clipPath="url(#circleClip)"
      />
    </svg>
  );
};

export default CircularProgress;
