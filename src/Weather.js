import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import WeatherInfo from "./WeatherInfo";
import { Oval } from "react-loader-spinner";
import "./App.css";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function displayWeatherData(response) {
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      feelsLike: response.data.main.feels_like,
      wind: response.data.wind.speed,
      city: response.data.name,
      description: response.data.weather[0].description,
      highTemperature: response.data.main.temp_max,
      lowTemperature: response.data.main.temp_min,
      humidity: response.data.main.humidity,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
    console.log(response.data);
  }

  function search() {
    const apiKey = "07d2964c500ffbfcd2b577b291d089bd";
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
      <div className="App mt-5 mb-0">
        <div className="Weather border border-3 border-primary rounded p-4">
          <div className="container-1 ps-4">
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
          <WeatherInfo data={weatherData} />
          <div className="container-3">
            <span>Next 5 days</span>
            <hr className="m-0" />
            <table className="table table-striped table-group-divider table-hover text-center mt-2 mb-0">
              <tbody>
                <tr>
                  <th scope="col">
                    {" "}
                    Tues
                    <br />
                    <span className="text-muted"> 06/13 </span>
                  </th>
                  <th scope="col">
                    {" "}
                    <img
                      src={weatherData.imgUrl}
                      alt={weatherData.description}
                      className="img-fluid"
                    />
                  </th>
                  <th scope="col">
                    88°
                    <br />
                    <span className="text-muted"> High </span>
                  </th>
                  <th scope="col">
                    66°
                    <br />
                    <span className="text-muted"> Low </span>
                  </th>
                  <th scope="col">
                    12mph
                    <br />
                    <span className="text-muted"> Wind </span>
                  </th>
                  <th scope="col">
                    0%
                    <br />
                    <span className="text-muted"> Rain </span>
                  </th>
                </tr>
                <tr>
                  <th scope="col">
                    Wed
                    <br />
                    <span className="text-muted"> 06/14 </span>
                  </th>
                  <th scope="col">
                    <img
                      src={weatherData.imgUrl}
                      alt={weatherData.description}
                      className="img-fluid"
                    />
                  </th>
                  <th scope="col">
                    86°
                    <br />
                    <span className="text-muted"> High </span>
                  </th>
                  <th scope="col">
                    63°
                    <br />
                    <span className="text-muted"> Low </span>
                  </th>
                  <th scope="col">
                    9mph
                    <br />
                    <span className="text-muted"> Wind </span>
                  </th>
                  <th scope="col">
                    40%
                    <br />
                    <span className="text-muted"> Rain </span>
                  </th>
                </tr>
                <tr>
                  <th scope="col">
                    Thurs
                    <br />
                    <span className="text-muted"> 06/15 </span>
                  </th>
                  <th scope="col">
                    <img
                      src={weatherData.imgUrl}
                      alt={weatherData.description}
                      className="img-fluid"
                    />
                  </th>
                  <th scope="col">
                    90°
                    <br />
                    <span className="text-muted"> High </span>
                  </th>
                  <th scope="col">
                    74°
                    <br />
                    <span className="text-muted"> Low </span>
                  </th>
                  <th scope="col">
                    11mph
                    <br />
                    <span className="text-muted"> Wind </span>
                  </th>
                  <th scope="col">
                    3%
                    <br />
                    <span className="text-muted"> Rain </span>
                  </th>
                </tr>
                <tr>
                  <th scope="col">
                    Fri
                    <br />
                    <span className="text-muted"> 06/16 </span>
                  </th>
                  <th scope="col">
                    <img
                      src={weatherData.imgUrl}
                      alt={weatherData.description}
                      className="img-fluid"
                    />
                  </th>
                  <th scope="col">
                    95°
                    <br />
                    <span className="text-muted"> High </span>
                  </th>
                  <th scope="col">
                    75°
                    <br />
                    <span className="text-muted"> Low </span>
                  </th>
                  <th scope="col">
                    3mph
                    <br />
                    <span className="text-muted"> Wind </span>
                  </th>
                  <th scope="col">
                    75%
                    <br />
                    <span className="text-muted"> Rain </span>
                  </th>
                </tr>
                <tr>
                  <th scope="col">
                    Sat
                    <br />
                    <span className="text-muted"> 06/17 </span>
                  </th>
                  <th scope="col">
                    <img
                      src={weatherData.imgUrl}
                      alt={weatherData.description}
                      className="img-fluid"
                    />
                  </th>
                  <th scope="col">
                    89°
                    <br />
                    <span className="text-muted"> High </span>
                  </th>
                  <th scope="col">
                    69°
                    <br />
                    <span className="text-muted"> Low </span>
                  </th>
                  <th scope="col">
                    8mph
                    <br />
                    <span className="text-muted"> Wind </span>
                  </th>
                  <th scope="col">
                    2%
                    <br />
                    <span className="text-muted"> Rain </span>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
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
