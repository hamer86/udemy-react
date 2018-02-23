import axios from 'axios';

const API_KEY = '0ddf8ec4dec48ec1ffd6806ce6d96ec3';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FEATCH_WEATHER = 'FEATCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url)

  console.log('request: ', request);

  return {
    type: FEATCH_WEATHER,
    paylod: request
  };
}
