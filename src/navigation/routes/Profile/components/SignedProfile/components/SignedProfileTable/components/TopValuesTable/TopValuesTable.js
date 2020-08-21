import React from "react";
import { Line } from "rc-progress";
import "./TopValuesTable.css";
import PropTypes from "prop-types";

const TopValuesTable = ({ values, type }) => {
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
                ? values.exit_velocity || "N/A"
                : values.velocity || "N/A"}
            </strong>
          </div>
          <div>
            <Line
              percent={
                type === "batting"
                  ? (values.exit_velocity / 160) * 100
                  : (values.velocity / 120) * 100
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
                ? values.distance || "N/A"
                : values.spin_rate || "N/A"}
            </strong>
          </div>
          <div>
            <Line
              percent={
                type === "batting"
                  ? (values.distance / 350) * 100
                  : (values.spin_rate / 5000) * 100
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
                ? values.launch_angle || "N/A"
                : values.pitch_movement || "N/A"}
            </strong>
          </div>
          <div>
            <Line
              percent={
                type === "batting"
                  ? (values.launch_angle / 55) * 100
                  : (values.pitch_movement / 100) * 100
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

TopValuesTable.propTypes = {
  values: PropTypes.object,
  type: PropTypes.string,
};

export default TopValuesTable;
