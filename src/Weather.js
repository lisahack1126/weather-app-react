import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import { Oval } from "react-loader-spinner";
import "./App.css";
import "./Weather.css";
import "./WeatherForecast.css";
import "./WeatherInfo.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function displayWeatherData(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      feelsLike: response.data.main.feels_like,
      wind: response.data.wind.speed,
      city: response.data.name,
      description: response.data.weather[0].description,
      highTemperature: response.data.main.temp_max,
      lowTemperature: response.data.main.temp_min,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
    });
  }

  function search() {
    const apiKey = "15b1a85709be0e6e9bce2b6a7ed7f23c";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(displayWeatherData);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="App">
        <div className="Weather border border-3 border-primary rounded p-3">
          <div className="container-1 ps-3">
            <div className="row">
              <div className="col city-date">
                <h1 className="city-name">{weatherData.city}</h1>
                <span className="current-date-time text-muted">
                  <FormattedDate date={weatherData.date} />
                </span>
              </div>
              <span className="search-engine col p-3">
                <form action="" onSubmit={handleSubmit}>
                  <input
                    type="search"
                    placeholder="Search a city..."
                    autoComplete="off"
                    autoFocus="on"
                    className="rounded form-control form-control-lg m-0"
                    onChange={handleCityChange}
                  />
                  <span className="search-button">
                    <button className="btn btn-primary m-1 p-2" type="submit">
                      Search 🔍
                    </button>
                  </span>
                </form>
              </span>
            </div>
          </div>
          <WeatherInfo data={weatherData} size={150} />
          <WeatherForecast
            data={weatherData}
            coordinates={weatherData.coordinates}
          />
        </div>
      </div>
    );
  } else {
    search();
    return (
      <div className="loader">
        <Oval height="100" width="100" color="blue" ariaLabel="loading" />
      </div>
    );
  }
}
