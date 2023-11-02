export const formatDate = (startDate: string, endDate?: string): string => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: '2-digit', day: '2-digit' };
  const formattedStartDate = new Date(startDate).toLocaleDateString(undefined, options).replace(/\//g, '.');

  if (endDate) {
    const formattedEndDate = new Date(endDate).toLocaleDateString(undefined, options).replace(/\//g, '.');
    return `${formattedStartDate} – ${formattedEndDate}`;
  }

  return formattedStartDate;
};
