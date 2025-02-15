import type { WeatherForecast } from "./types";
import type { CustomErrorResponse } from "../../types/customError";

export const fetchWeatherForecast = async (key: string): Promise<WeatherForecast> => {
  const response = await fetch(
    `${import.meta.env.VITE_BASE_API_URL}/forecast?q=${key}&APPID=${import.meta.env.VITE_API_KEY}&units=metric&lang=ja`
  );
  if (!response.ok) {
    const error: CustomErrorResponse = new Error(response.statusText);
    error.status = response.status;
    throw error;
  }
  const data = await response.json();
  return data;
};
