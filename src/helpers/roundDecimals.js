export default function roundDecimals(value, decimals) {
  if (value === 0) return 0;
  const roundedDecimal = Number(
    Math.round(value + 'e' + decimals) + 'e-' + decimals,
  );
  return roundedDecimal.toFixed(decimals);
}
