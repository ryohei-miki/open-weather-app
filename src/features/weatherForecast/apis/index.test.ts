import { describe, expect, it, vi, beforeEach, afterEach } from "vitest";

import { fetchWeatherForecast } from "./index";

declare global {
  interface Window {
    fetch: typeof fetch;
  }
}

describe("fetchWeatherForecast", () => {
  const mockFetch = vi.fn();
  const originalFetch = globalThis.fetch;

  beforeEach(() => {
    globalThis.fetch = mockFetch;
    vi.stubGlobal("import.meta", {
      env: {
        VITE_BASE_API_URL: import.meta.env.VITE_BASE_API_URL,
        VITE_API_KEY: import.meta.env.VITE_API_KEY,
      },
    });
  });

  afterEach(() => {
    globalThis.fetch = originalFetch;
    vi.clearAllMocks();
  });

  it("正常系: 天気予報データを取得できること", async () => {
    const mockResponse = {
      city: { name: "Tokyo" },
      list: [
        {
          dt: 1648888800,
          main: { temp: 20 },
          weather: [{ description: "晴れ", icon: "01d" }],
        },
      ],
    };

    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockResponse),
    });

    const result = await fetchWeatherForecast("Tokyo");

    expect(mockFetch).toHaveBeenCalledWith(
      `${import.meta.env.VITE_BASE_API_URL}/forecast?q=Tokyo&APPID=${import.meta.env.VITE_API_KEY}&units=metric&lang=ja`
    );
    expect(result).toEqual(mockResponse);
  });

  it("異常系: APIリクエストが失敗した場合はエラーがスローされること", async () => {
    mockFetch.mockResolvedValueOnce({
      ok: false,
      status: 404,
      statusText: "Not Found",
    });

    await expect(fetchWeatherForecast("InvalidCity")).rejects.toThrow("Not Found");
    expect(mockFetch).toHaveBeenCalledWith(
      `${import.meta.env.VITE_BASE_API_URL}/forecast?q=InvalidCity&APPID=${import.meta.env.VITE_API_KEY}&units=metric&lang=ja`
    );
  });
});
