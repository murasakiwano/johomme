type DateStyle = "short" | "medium" | "long" | "full";
export function formatDate(date: string, dateStyle: DateStyle = "short", locales = "pt-BR") {
  // Safari is mad about dashes in the date
  const dateToFormat = new Date(date.replaceAll("-", "/"));
  const dateFormatter = new Intl.DateTimeFormat(locales, { dateStyle });
  return dateFormatter.format(dateToFormat);
}
