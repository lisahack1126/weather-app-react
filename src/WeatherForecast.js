import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  return (
    <div className="WeatherForecast">
      <div className="container-3">
        <hr className="m-0" />
        <div className="row">
          <div className="col">
            <div className="WeatherForecast-day">Wed</div>
            <img src={props.data.iconUrl} alt={props.data.description} />
            <div className="WeatherForecast-temperatures">
              <span className="WeatherForecast-temp-max">90°F</span>
              <span className="WeatherForecast-temp-min text-muted">81°F</span>
            </div>
          </div>
        </div>
        <div className="row">Hello</div>
      </div>
    </div>
  );
}
