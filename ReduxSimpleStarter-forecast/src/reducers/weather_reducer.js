import axios from 'axios';

const API_KEY = 'a09ce8b23a5e645c9cb00bfa90133b53';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

// action creator responsible to fetch the weatrher, it has to rerurn an object
export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;

  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    // This is a promise! so redux-promise, stops the execution until the promise is resolved!!
    payload: request,
  };
}

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_WEATHER:
      return [...state, action.payload.data];
    default:
      return state;
  }
};
