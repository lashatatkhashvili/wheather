import React, { useState, useEffect } from "react";
import WheatherInfo from "../components/WheatherInfo";
import SearchCity from "../components/SearchCity";
import { getByLocation } from "../API";

export default function Wheather() {
  const [wheather, setWeather] = useState();
  const [city, setCity] = useState("");

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let pos = {
          lat: position.coords.latitude,
          long: position.coords.longitude,
        };

        getByLocation(pos.lat, pos.long).then((data) => {
          setWeather(data);
          setCity(data.timezone);
        });
      });
    }
  }, []);

  return (
    <div>
      <WheatherInfo wheather={wheather} city={city} />
      <SearchCity setWeather={setWeather} setCity={setCity} />
    </div>
  );
}
