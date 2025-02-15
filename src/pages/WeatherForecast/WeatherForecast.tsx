import { useParams } from "react-router-dom";
import useSWR from "swr";

import styles from "./WeatherForecast.module.scss";
import { fetchWeatherForecast } from "../../features/weatherForecast/apis";
import { WeatherForecastList } from "../../features/weatherForecast/components/WeatherForecastList/WeatherForecastList";
import type { WeatherForecast } from "../../features/weatherForecast/types";
import { LinkButton } from "../../ui/LinkButton/LinkButton";

export default function WeatherForecast() {
  const { key } = useParams();
  const {
    data: weather,
    isLoading,
    error,
  } = useSWR<WeatherForecast>(key ?? null, fetchWeatherForecast, {
    revalidateOnFocus: false,
    revalidateIfStale: false,
  });

  if (error) throw error;

  return (
    <div className={styles.WeatherForecast}>
      {isLoading && <div>Loading...</div>}
      {weather && (
        <>
          <LinkButton to="/" className={styles.BackButton}>
            天気予報一覧に戻る
          </LinkButton>
          <div className={styles.WeatherForecastListWrapper}>
            <h2 className={styles.WeatherForecastListTitle}>🌦️ {weather.city.name}の天気予報</h2>
            <WeatherForecastList weather={weather.list} />
          </div>
        </>
      )}
    </div>
  );
}
