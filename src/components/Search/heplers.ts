export const getStringFromQuery = (query: string) => {
  if (query) return query.replace(/[-]/gi, ' ');
  else return '';
};
