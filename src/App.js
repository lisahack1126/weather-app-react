import React from "react";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Lexington" />
        <footer className="text-center">
          <a
            href="https://github.com/lisahack1126/weather-app-react"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code on GitHub
          </a>
          , by Lisa Wedddington, and hosted on{" "}
          <a
            href="https://jolly-crepe-69b5b2.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
