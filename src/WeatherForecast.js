import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  return (
    <div className="WeatherForecast">
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
                  src={props.data.iconUrl}
                  alt={props.data.description}
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
                  src={props.data.iconUrl}
                  alt={props.data.description}
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
                  src={props.data.iconUrl}
                  alt={props.data.description}
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
                  src={props.data.iconUrl}
                  alt={props.data.description}
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
                  src={props.data.iconUrl}
                  alt={props.data.description}
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
  );
}
