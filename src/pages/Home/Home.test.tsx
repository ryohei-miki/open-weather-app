import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";

import "@testing-library/jest-dom";
import Home from "./Home";
import { REGIONS } from "../../features/regions/constants";

describe("Home", () => {
  it("天気予報一覧のタイトルが表示されること", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    expect(screen.getByText("☀️ 天気予報一覧 ☔")).toBeInTheDocument();
  });

  it("都道府県の一覧が表示されること", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    REGIONS.forEach((region) => {
      expect(screen.getByText(`${region.name}の天気`)).toBeInTheDocument();
    });
  });
});
