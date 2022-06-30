import React from "react";
import "./App.css";
import "./Weather.css";

export default function Weather() {
  const weatherData = {
    city: "Lexington",
    temperature: 84,
    date: "Monday, 06/13",
    time: "9:50am",
    description: "Mostly sunny",
    imgUrl:
      "https://f.playcode.io/p-911817/v-1/a2ef48a2-962a-4158-a6c4-27ab4ae00f7e/sunny-icon.png",
  };

  return (
    <div className="App m-5">
      <div className="Weather border border-3 border-primary rounded p-4">
        <div className="container-1 ps-4">
          <div className="row">
            <div className="col">
              <h1 className="city-name">{weatherData.city}</h1>
              <span className="current-date-time text-muted">
                {weatherData.date} {weatherData.time}
              </span>
            </div>
            <div className="col">
              <div className="search-engine p-2">
                <form action="">
                  <input
                    type="search"
                    placeholder="Search a city..."
                    autocomplete="off"
                    autofocus="on"
                    className="w-75 p-1 me-1 rounded"
                  />
                  <input
                    type="submit"
                    className="btn btn-primary p-2"
                    value="Search 🔍"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="container-2 text-center mt-5 mb-4">
          <div className="row">
            <div className="col">
              <img
                src={weatherData.imgUrl}
                alt={weatherData.description}
                className="img-fluid current-weather-image"
              />
            </div>
            <div className="col">
              <span className="temperature">{weatherData.temperature}</span>
              <span className="fahrenheit">°F</span>
              <br />
              <span className="text-muted">{weatherData.description}</span>
            </div>
            <div className="vr p-0 vertical-line"></div>
            <div className="col">
              <div className="row mt-4 mb-4">
                <div className="col">
                  23°
                  <br />
                  <span className="text-muted"> High </span>
                </div>
                <div className="col">
                  7mph
                  <br />
                  <span className="text-muted"> Wind </span>
                </div>
                <div className="col">
                  05:27
                  <br />
                  <span className="text-muted"> Sunrise </span>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  14°
                  <br />
                  <span className="text-muted"> Low </span>
                </div>
                <div className="col">
                  0%
                  <br />
                  <span className="text-muted"> Rain </span>
                </div>
                <div className="col">
                  20:57
                  <br />
                  <span className="text-muted"> Sunset </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-3">
          <span>Next 5 days</span>
          <table className="table table-striped table-group-divider table-hover text-center">
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
          </table>
        </div>
      </div>
      <footer>
        <a href="#">Open-source code</a>, by Lisa Wedddington
      </footer>
    </div>
  );
}
