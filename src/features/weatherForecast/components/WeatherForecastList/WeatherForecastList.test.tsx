import { render, screen } from "@testing-library/react";
import { format } from "date-fns";
import { describe, expect, it } from "vitest";
import "@testing-library/jest-dom";

import { WeatherForecastList } from "./WeatherForecastList";
import type { WeatherForecast } from "../../types";

const mockWeatherData = [
  {
    dt: 1648888800, // 2022-04-02 12:00:00
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
  {
    dt: 1648899600, // 2022-04-02 15:00:00
    main: {
      temp: 22,
    },
    weather: [
      {
        description: "曇り",
        icon: "02d",
      },
    ],
  },
  {
    dt: 1648972800, // 2022-04-03 12:00:00
    main: {
      temp: 18,
    },
    weather: [
      {
        description: "雨",
        icon: "10d",
      },
    ],
  },
] as WeatherForecast["list"];

describe("WeatherForecastList", () => {
  it("日付ごとにグループ化された天気予報が表示されること", () => {
    render(<WeatherForecastList weather={mockWeatherData} />);

    // 日付のグループが正しく表示されることを確認
    const date1 = format(mockWeatherData[0].dt * 1000, "M月dd日");
    const date2 = format(mockWeatherData[2].dt * 1000, "M月dd日");
    expect(screen.getByText(date1)).toBeInTheDocument();
    expect(screen.getByText(date2)).toBeInTheDocument();

    // 天気の説明が正しく表示されることを確認
    expect(screen.getByText("晴れ")).toBeInTheDocument();
    expect(screen.getByText("曇り")).toBeInTheDocument();
    expect(screen.getByText("雨")).toBeInTheDocument();

    // 気温が正しく表示されることを確認
    expect(screen.getByText("20℃")).toBeInTheDocument();
    expect(screen.getByText("22℃")).toBeInTheDocument();
    expect(screen.getByText("18℃")).toBeInTheDocument();
  });

  it("天気予報データが空の場合は何も表示されないこと", () => {
    render(<WeatherForecastList weather={[]} />);

    const listElement = screen.queryByRole("list");
    expect(listElement).not.toBeInTheDocument();
  });
});
