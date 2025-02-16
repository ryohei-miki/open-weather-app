import styles from "./WeatherForecastListItem.module.scss";
import { formatDate } from "../../../../utils/dateFormatter";
import { WeatherForecast } from "../../types";

type Props = {
  weather: WeatherForecast["list"][number];
};

const weatherIconUrl = (icon: string) => `https://openweathermap.org/img/wn/${icon}@2x.png`;
const displayTemp = (temp: number) => Math.round(temp);

export function WeatherForecastListItem({ weather }: Props) {
  return (
    <li className={styles.WeatherForecastListItem}>
      <div className={styles.ItemDate}>{formatDate(weather.dt * 1000, "HH:mm")}</div>
      <div className={styles.ItemIconWrapper}>
        <img
          className={styles.ItemIcon}
          src={weatherIconUrl(weather.weather[0].icon)}
          alt={weather.weather[0].description}
        />
      </div>
      <div className={styles.ItemTemp}>{displayTemp(weather.main.temp)}℃</div>
      <div className={styles.ItemDescription}>{weather.weather[0].description}</div>
    </li>
  );
}
