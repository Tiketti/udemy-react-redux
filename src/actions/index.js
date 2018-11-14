import axios from 'axios';

const API_KEY = 'a5efc2ad79a08b4c12726fe651b969c1';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export const fetchWeather = city => {
  const url = `${ROOT_URL}&q=${city},fi`;
  const request = axios.get(url);

  // axios.get(url).then(response => console.dir(response));

  return {
    type: FETCH_WEATHER,
    payload: request,
  };
};
