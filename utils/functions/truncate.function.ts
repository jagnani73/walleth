export const Truncate = (
  text: string,
  start: number = 6,
  end: number = 4
): string => {
  if (start + end >= text.length) return text;
  return `${text.slice(0, start)}...${text.slice(-end)}`;
};
