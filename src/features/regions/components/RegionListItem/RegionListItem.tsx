import { Link } from "react-router-dom";

import styles from "./RegionListItem.module.scss";
import { Region } from "../../types";

type Props = {
  region: Region;
};

export function RegionListItem({ region }: Props) {
  return (
    <li className={styles.RegionListItem}>
      <Link className={styles.RegionListItemLink} to={`/weather/${region.key}`}>
        {region.name}の天気
      </Link>
    </li>
  );
}
