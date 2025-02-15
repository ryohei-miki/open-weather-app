import styles from "./RegionList.module.scss";
import { REGIONS } from "../../constants";
import { RegionListItem } from "../RegionListItem/RegionListItem";

export function RegionList() {
  return (
    <ul className={styles.RegionList}>
      {REGIONS.map((region) => (
        <RegionListItem key={region.key} region={region} />
      ))}
    </ul>
  );
}
