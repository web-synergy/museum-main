export const truncateDescription = (string: string, maxLength: number): string => {
  return string.length >= maxLength ? string.slice(0, maxLength) + '...' : string;
};
