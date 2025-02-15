import styles from "./ErrorMessage.module.scss";
import NotFound from "../../pages/NotFound/NotFound";
import type { CustomErrorResponse } from "../../types/customError";

type Props = {
  error: CustomErrorResponse;
};

export function ErrorMessage({ error }: Props) {
  if ("status" in error) {
    if (error.status === 404) return <NotFound />;

    return (
      <div className={styles.ErrorMessage}>
        <h1 className={styles.ErrorMessageTitle}>{error.message}</h1>
        <p className={styles.ErrorMessageStatus}>{error.status}</p>
      </div>
    );
  }
  // ステータスが存在しない場合は一律で500エラーとする
  return (
    <div className={styles.ErrorMessage}>
      <h1 className={styles.ErrorMessageTitle}>500 Internal Server Error</h1>
      <p className={styles.ErrorMessageStatus}>エラーが発生しました</p>
    </div>
  );
}
