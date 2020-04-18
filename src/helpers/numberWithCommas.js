export default function numberWithCommas(number) {
  if (Number.isInteger(number)) {
    return number.toLocaleString();
  }
  return number;
}
