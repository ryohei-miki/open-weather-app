import { format } from "date-fns";

import styles from "./WeatherForecastList.module.scss";
import { WeatherForecast } from "../../types";
import { WeatherForecastListItem } from "../WeatherForecastListItem/WeatherForecastListItem";

type Props = {
  weather: WeatherForecast["list"];
};

export function WeatherForecastList({ weather }: Props) {
  const groupedWeatherByDate = weather.reduce(
    (acc, item) => {
      const date = format(item.dt * 1000, "M月dd日");
      if (!acc[date]) {
        acc[date] = [];
      }
      acc[date].push(item);
      return acc;
    },
    {} as Record<string, WeatherForecast["list"]>
  );

  return (
    <>
      {Object.entries(groupedWeatherByDate).map(([date, items]) => (
        <div key={date} className={styles.WeatherForecastListDay}>
          <h3 className={styles.WeatherForecastListDayTitle}>{date}</h3>
          <ul className={styles.WeatherForecastList}>
            {items.map((item) => (
              <WeatherForecastListItem key={item.dt} weather={item} />
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}
