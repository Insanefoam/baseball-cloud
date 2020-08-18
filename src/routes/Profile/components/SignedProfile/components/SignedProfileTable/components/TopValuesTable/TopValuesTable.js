import React from "react";
import { Line } from "rc-progress";
import "./TopValuesTable.css";

const TopValuesTable = ({ data, type }) => {
  return (
    <div className="topvalues">
      <div className="topvalues__title">
        {type === "batting" ? "Top Batting Values" : "Top Pitching Values"}
      </div>
      <div className="topvalues__values">
        <div className="topvalues__value">
          <div className="topvalues__value-top">
            <p>{type === "batting" ? "Exit Velocity" : "Fastball Velocity"}</p>
            <strong>
              {type === "batting"
                ? data.exit_velocity || "N/A"
                : data.velocity || "N/A"}
            </strong>
          </div>
          <div>
            <Line
              percent={
                type === "batting"
                  ? (data.exit_velocity / 160) * 100
                  : (data.velocity / 120) * 100
              }
              strokeWidth="2"
              strokeColor="#FFD01A"
            />
          </div>
        </div>
        <div className="topvalues__value">
          <div className="topvalues__value-top">
            <p>{type === "batting" ? "Carry Distance" : "Spin Rate"}</p>
            <strong>
              {type === "batting"
                ? data.distance || "N/A"
                : data.spin_rate || "N/A"}
            </strong>
          </div>
          <div>
            <Line
              percent={
                type === "batting"
                  ? (data.distance / 350) * 100
                  : (data.spin_rate / 5000) * 100
              }
              strokeWidth="2"
              strokeColor="#FFD01A"
            />
          </div>
        </div>
        <div className="topvalues__value">
          <div className="topvalues__value-top">
            <p>{type === "batting" ? "Launch Angle" : "Pitch Movement"}</p>
            <strong>
              {type === "batting"
                ? data.launch_angle || "N/A"
                : data.pitch_movement || "N/A"}
            </strong>
          </div>
          <div>
            <Line
              percent={
                type === "batting"
                  ? (data.launch_angle / 55) * 100
                  : (data.pitch_movement / 100) * 100
              }
              strokeWidth="2"
              strokeColor="#FFD01A"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopValuesTable;
