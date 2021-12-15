export const formatIdr = (price) => {
  const format = new Intl.NumberFormat("id-ID", {
    maximumSignificantDigits: 3,
  }).format(price);

  return `Rp. ${format}`;
};
