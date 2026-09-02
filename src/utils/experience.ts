export function getExperienceDuration(startDate: Date = new Date(2024, 4, 1)): string {
  const now = new Date();
  let years = now.getFullYear() - startDate.getFullYear();
  let months = now.getMonth() - startDate.getMonth();

  if (now.getDate() < startDate.getDate()) {
    months -= 1;
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  const yearLabel = years > 0 ? `${years} year${years > 1 ? "s" : ""}` : "";
  const monthLabel = months > 0 ? `${months} month${months > 1 ? "s" : ""}` : "";

  if (yearLabel && monthLabel) return `${yearLabel} ${monthLabel}`;
  if (yearLabel) return yearLabel;
  if (monthLabel) return monthLabel;
  return "less than a month";
}