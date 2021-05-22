import axios from "axios";
import { KEY } from "./config";

export const getByLocation = async (lat, lon) => {
  const req = await axios.get(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=${KEY}`
  );

  return req.data;
};

export const getByCity = async (city) => {
  const req = await axios.get(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}`
  );

  return req.data;
};
