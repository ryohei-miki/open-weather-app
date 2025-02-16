import { describe, expect, it } from "vitest";

import { formatDate } from "./dateFormatter";

describe("formatDate", () => {
  it("日付文字列を指定されたフォーマットで返すこと", () => {
    const date = new Date(2024, 0, 1, 12, 30);
    expect(formatDate(date, "yyyy/MM/dd")).toBe("2024/01/01");
    expect(formatDate(date, "HH:mm")).toBe("12:30");
    expect(formatDate(date, "M月dd日")).toBe("1月01日");
  });

  it("UNIXタイムスタンプを指定されたフォーマットで返すこと", () => {
    const timestamp = 1704079800000;
    expect(formatDate(timestamp, "yyyy/MM/dd")).toBe("2024/01/01");
    expect(formatDate(timestamp, "HH:mm")).toBe("12:30");
    expect(formatDate(timestamp, "M月dd日")).toBe("1月01日");
  });
});