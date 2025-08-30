export function getTimestamp() {
  const timestamp = new Date();
  const formattedTimestamp = timestamp
    .toISOString()
    .slice(0, 19)
    .replace("T", " ");
  return formattedTimestamp;
}
