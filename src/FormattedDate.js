import React from "react";

export default function FormattedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let day = days[props.date.getDay()];
  let date = [props.date.getDate()];
  let hours = props.date.getHours();
  let minutes = props.date.getMinutes();
  let month = months[props.date.getMonth()];

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let ampm = hours >= 12 ? `pm` : `am`;
  hours = hours % 12;
  hours = hours ? hours : 12;
  if (hours < 10) {
    hours = `${hours}`;
  }

  return (
    <div className="FormattedDate">
      {day}, {month} {date} <div className="vr"></div> {hours}:{minutes}
      {ampm}
    </div>
  );
}
