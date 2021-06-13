export const PriceFormat = (value) =>
  new Intl.NumberFormat("en-VN", {
    style: "currency",
    currency: "VND",
  }).format(value);
