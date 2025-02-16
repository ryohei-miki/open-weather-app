import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import useSWR from "swr";
import { describe, expect, it, vi, Mock } from "vitest";
import "@testing-library/jest-dom";

import WeatherForecast from "./WeatherForecast";

vi.mock("swr");
const mockUseSWR = useSWR as Mock;

const mockWeatherData = {
  city: {
    name: "東京",
  },
  list: [
    {
      dt: 1648888800,
      main: {
        temp: 20,
      },
      weather: [
        {
          description: "晴れ",
          icon: "01d",
        },
      ],
    },
  ],
};

// react-router-dom のモックを非同期で実際のモジュールをインポートした上で上書き
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useParams: () => ({ key: "Tokyo" }),
  };
});

describe("WeatherForecast", () => {
  it("APIリクエスト時にローディング中の表示がされること", () => {
    mockUseSWR.mockReturnValue({
      data: undefined,
      isLoading: true,
      error: undefined,
    });

    render(
      <BrowserRouter>
        <WeatherForecast />
      </BrowserRouter>
    );

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("天気予報の一覧が表示されること", () => {
    mockUseSWR.mockReturnValue({
      data: mockWeatherData,
      isLoading: false,
      error: undefined,
    });

    render(
      <BrowserRouter>
        <WeatherForecast />
      </BrowserRouter>
    );

    expect(screen.getByText("🌦️ 東京の天気予報")).toBeInTheDocument();
    expect(screen.getByText("天気予報一覧に戻る")).toBeInTheDocument();
  });

  it("APIリクエスト時にエラーが発生した場合はエラーがスローされること", () => {
    const error = new Error("エラーが発生しました");
    mockUseSWR.mockReturnValue({
      data: undefined,
      isLoading: false,
      error,
    });

    expect(() =>
      render(
        <BrowserRouter>
          <WeatherForecast />
        </BrowserRouter>
      )
    ).toThrow("エラーが発生しました");
  });
});
