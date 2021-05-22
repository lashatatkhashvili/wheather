import moment from "moment";
import PropTypes from "prop-types";
import { Div } from "../style/styledWheather";

export default function WheatherInfo({ wheather, city }) {
  return (
    <Div>
      {wheather && <h1>{city}</h1>}
      {wheather &&
        wheather.daily.map(
          ({
            dt,
            temp: { day },
            weather: [{ description, icon, main, id }],
          }) => (
            <ul key={dt}>
              <li>{moment(dt * 1000).format("dddd")}</li>
              <li>{moment(dt * 1000).format("MMMM Do")}</li>
              <li>
                <img
                  src={`http://openweathermap.org/img/wn/${icon}.png`}
                  alt="weather icon"
                />
              </li>
              <li>{Math.round(day - 273.15)}°C</li>
              <li>{description}</li>
            </ul>
          )
        )}
    </Div>
  );
}

WheatherInfo.propTypes = {
  wheather: PropTypes.array,
  city: PropTypes.string,
};
