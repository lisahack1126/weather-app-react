import React, { useState, useEffect } from "react";
import axios from "axios";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  function load() {
    let apiKey = "15b1a85709be0e6e9bce2b6a7ed7f23c";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="container-3 mt-5">
          <div className="row mt-2">
            <div className="col">
              <WeatherForecastDay data={forecast[0]} />
            </div>
            <div className="col">
              <WeatherForecastDay data={forecast[1]} />
            </div>
            <div className="col">
              <WeatherForecastDay data={forecast[2]} />
            </div>
            <div className="col">
              <WeatherForecastDay data={forecast[3]} />
            </div>
            <div className="col">
              <WeatherForecastDay data={forecast[4]} />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    load();

    return null;
  }
}
