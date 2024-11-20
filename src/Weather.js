import React from "react";
import "./Weather.css";

export default function Weather() {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-6">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control"
              />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="btn btn-primary" />
            </div>
          </div>
        </form>
        <div className="row">
          <div className="col-3">
            <h1>Quito</h1>
          </div>
          <div className="col-3">
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-night.png"
              alt="Mostly Cloudy"
            />
            10°C
          </div>
          <div className="col-3">
            <ul>
              <li>Tuesday 20:46</li>
              <li>Humidity: 71%, Wind: 1.03km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
}