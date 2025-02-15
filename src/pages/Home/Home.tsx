import styles from "./Home.module.scss";
import { RegionList } from "../../features/regions/components/RegionList/RegionList";

export default function Home() {
  return (
    <div className={styles.Home}>
      <h2 className={styles.HomeTitle}>☀️ 天気予報一覧 ☔</h2>
      <RegionList />
    </div>
  );
}
