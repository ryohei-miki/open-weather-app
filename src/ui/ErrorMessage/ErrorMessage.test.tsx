import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import "@testing-library/jest-dom";

import { ErrorMessage } from "./ErrorMessage";
import type { CustomErrorResponse } from "../../types/customError";

describe("ErrorMessage", () => {
  it("404エラーの場合はNotFoundコンポーネントが表示されること", () => {
    const error = new Error("Not Found");
    (error as CustomErrorResponse).status = 404;

    render(<ErrorMessage error={error} />);

    expect(screen.getByText("404 Not Found")).toBeInTheDocument();
    expect(screen.getByText("ページが見つかりませんでした。")).toBeInTheDocument();
  });

  it("404以外のステータスコードを持つエラーの場合はエラーメッセージとステータスコードが表示されること", () => {
    const error = new Error("Bad Request");
    (error as CustomErrorResponse).status = 400;

    render(<ErrorMessage error={error} />);

    expect(screen.getByText("Bad Request")).toBeInTheDocument();
    expect(screen.getByText("400")).toBeInTheDocument();
  });

  it("ステータスコードを持たないエラーの場合は500エラーが表示されること", () => {
    const error = new Error("Unknown Error");

    render(<ErrorMessage error={error} />);

    expect(screen.getByText("500 Internal Server Error")).toBeInTheDocument();
    expect(screen.getByText("エラーが発生しました")).toBeInTheDocument();
  });
});
