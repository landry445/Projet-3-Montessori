/* eslint-disable */
export const calculateCost = (price, tva) => {
  if (price * (1 + tva / 100) === 0) {
    return "Gratuit";
  }
  return `${price * (1 + tva / 100)} €`;
};
