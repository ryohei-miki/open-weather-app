import type { CustomErrorResponse } from "../../types/customError";

type Props = {
  error: CustomErrorResponse;
};

export function ErrorMessage({ error }: Props) {
  if ("status" in error) {
    return (
      <div>
        <p>エラーが発生しました</p>
        <pre>{error.status}</pre>
        <pre>{error.message}</pre>
      </div>
    );
  }
  // ステータスが存在しない場合は一律で500エラーとする
  return (
    <div>
      <p>エラーが発生しました</p>
      <pre>500 Error</pre>
      <pre>{error.message}</pre>
    </div>
  );
}
