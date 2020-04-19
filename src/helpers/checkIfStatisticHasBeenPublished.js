export default function checkIfStatisticHasBeenPublished(
  figure,
  haveBeenPublished,
) {
  if (!haveBeenPublished) {
    return 'Not yet published';
  }
  return figure;
}
