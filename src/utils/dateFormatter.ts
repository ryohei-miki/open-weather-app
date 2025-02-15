import { format } from "date-fns";

export function formatDate(date: Date, formatStr: string): string {
  return format(date, formatStr);
}
