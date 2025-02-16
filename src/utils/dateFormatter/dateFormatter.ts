import { format } from "date-fns";

export function formatDate(date: Date | number, formatStr: string): string {
  return format(date, formatStr);
}
