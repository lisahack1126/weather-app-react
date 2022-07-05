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
    console.log(response.data);
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
      <div className="App m-5">
        <div className="Weather border border-3 border-primary rounded p-3">
          <div className="container-1 ps-3">
            <div className="row">
              <div className="col">
                <h1 className="city-name">{weatherData.city}</h1>
                <span className="current-date-time text-muted">
                  <FormattedDate date={weatherData.date} />
                </span>
              </div>
              <div className="col">
                <div className="search-engine p-2">
                  <form action="" onSubmit={handleSubmit}>
                    <input
                      type="search"
                      placeholder="Search a city..."
                      autoComplete="off"
                      autoFocus="on"
                      className="w-60 p-1 me-1 rounded"
                      onChange={handleCityChange}
                    />
                    <input
                      type="submit"
                      className="btn btn-primary mb-1"
                      value="Search 🔍"
                    />
                  </form>
                </div>
              </div>
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
