import React, { useState } from "react";
import PropTypes from "prop-types";
import { Input } from "../style/styledWheather";
import { getByCity, getByLocation } from "../API";

export default function SearchCity({ setWeather, setCity }) {
  const [query, setQuery] = useState("");

  const queryVal = (e) => {
    setQuery(e.target.value);
  };

  const search = async (e) => {
    if (e.key === "Enter") {
      const req = await getByCity(query);
      const { lon, lat } = req.coord;
      getByLocation(lat, lon).then((data) => setWeather(data));
      setCity(query);
      setQuery("");
    }
  };
  return (
    <div>
      <Input
        type="text"
        placeholder="Type City"
        value={query}
        onChange={queryVal}
        onKeyPress={search}
      />
    </div>
  );
}

SearchCity.propTypes = {
  setWeather: PropTypes.func,
  setCity: PropTypes.func,
};
