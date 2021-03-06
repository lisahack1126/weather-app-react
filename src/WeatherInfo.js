import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="container-2 text-center mt-3 mb-0">
        <div className="row">
          <div className="col-sm">
            <div className="float-left main-weather-icon">
              <WeatherIcon code={props.data.icon} size={props.size} />
            </div>
          </div>
          <div className="col-sm current-temp-conditions">
            <span className="temperature">
              {Math.round(props.data.temperature)}
            </span>
            <span className="fahrenheit">°F</span>
            <br />
            <span className="text-muted text-capitalize">
              {props.data.description}
            </span>
          </div>
          <div className="vr p-0 vertical-line"></div>
          <div className="col-sm pe-4 ">
            <div className="row mt-4 mb-3 ">
              <div className="col-sm">
                {Math.round(props.data.highTemperature)}°F
                <br />
                <span className="text-muted"> High </span>
              </div>
              <div className="col-sm">
                {Math.round(props.data.lowTemperature)}°F
                <br />
                <span className="text-muted"> Low </span>
              </div>
              <div className="col-sm">
                {Math.round(props.data.wind)}mph
                <br />
                <span className="text-muted"> Wind </span>
              </div>
            </div>
            <div className="row ps-2">
              <div className="col-sm">
                {Math.round(props.data.feelsLike)}°F
                <br />
                <span className="text-muted"> Feels Like </span>
              </div>
              <div className="col-sm">
                {props.data.humidity}%
                <br />
                <span className="text-muted"> Humidity </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
