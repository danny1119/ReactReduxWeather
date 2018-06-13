
import axios from 'axios'; //Jquery Ajax

const API_KEY ='8a7f3e3600187feae06e590a95c94dcf';// '6a78596d062df78380eff5944c4e5567';
//const API_KEY ='6a78596d062df78380eff5944c4e5567';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';
export function fetchWeather(city){
  const url = `${ROOT_URL}&q=${city},us`;

  // get ajax request from url
  const request = axios.get(url);
  //request.then(() => callback());
  console.log('Request:', request);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
