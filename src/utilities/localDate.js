export default function renderDate(timestamp, locale = "en-GB") {
  if (!timestamp) return "";
  const d = new Date(timestamp);
  d.setTime(d.getTime() + d.getTimezoneOffset() * 60 * 1000); // handles daylight saving offset
  return `"${d
    .toLocaleString(locale)
    .replace(/[^ -~]/g, "")
    .replace(",", "")}"`;
}
