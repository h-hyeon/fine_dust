import axios from 'axios';

const API_KEY = '8d5d5eac48586bf9657d18e676d89d47f69c9947';
const ROOT_URL = 'https://api.waqi.info/feed';

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}/${city}/?token=${API_KEY}`;
  const request = axios.get(url);
  
  return {
    type: FETCH_WEATHER,
    payload: request
    
  };
}