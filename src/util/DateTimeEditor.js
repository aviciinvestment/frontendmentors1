export default function dateTimeEditor(date) {
  date = new Date(date);
  return date.toDateString();
}
