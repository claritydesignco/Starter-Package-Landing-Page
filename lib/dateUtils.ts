// Utility functions for dynamic dates
export function getCurrentMonth(): string {
  const months = ['January', 'February', 'March', 'April', 'May', 'June',
                  'July', 'August', 'September', 'October', 'November', 'December'];
  return months[new Date().getMonth()];
}

export function getCurrentYear(): number {
  return new Date().getFullYear();
}

export function getNextMonth(): string {
  const months = ['January', 'February', 'March', 'April', 'May', 'June',
                  'July', 'August', 'September', 'October', 'November', 'December'];
  const nextMonthIndex = (new Date().getMonth() + 1) % 12;
  return months[nextMonthIndex];
}

export function getNextMonthYear(): number {
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();
  // If December, next month is January of next year
  return currentMonth === 11 ? currentYear + 1 : currentYear;
}

export function getEndOfMonth(): Date {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  // Last day of current month
  return new Date(year, month + 1, 0, 23, 59, 59);
}

export function getMonthDay(date: Date): number {
  return date.getDate();
}
