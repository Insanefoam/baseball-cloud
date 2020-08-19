import React from "react";
import "./AverageValuesTable.css";

const AvarageValuesTable = ({ data }) => {
  console.log(data);

  const renderHead = (titles) => {
    return titles.map((title, index) => (
      <th scope="col" key={index}>
        {title}
      </th>
    ));
  };

  const renderRows = (type, data) => {
    if (type === "pitching") {
      return data.map((el, index) => (
        <tr key={index}>
          <td>{el.pitch_type}</td>
          <td>{el.velocity}</td>
          <td>{el.spin_rate}</td>
        </tr>
      ));
    }
    if (type === "batting") {
      return data.map((el, index) => (
        <tr key={index}>
          <td>{el.pitch_type}</td>
          <td>{el.distance}</td>
          <td>{el.launch_angle}</td>
          <td>{el.exit_velocity}</td>
        </tr>
      ));
    }
  };

  return (
    <div className="tables">
      {data.pitching.top_values && (
        <div>
          <span>Top Pitching Values</span>
          <table className="table table-borderless">
            <thead>
              <tr>{renderHead(["Pitch Type", "Velocity", "Spin Rate"])}</tr>
            </thead>
            <tbody>{renderRows("pitching", data.pitching.top_values)}</tbody>
          </table>
        </div>
      )}
      {data.pitching.average_values && (
        <div>
          <span>Average Pitching Values</span>
          <table className="table table-borderless">
            <thead>
              <tr>{renderHead(["Pitch Type", "Velocity", "Spin Rate"])}</tr>
            </thead>
            <tbody>
              {renderRows("pitching", data.pitching.average_values)}
            </tbody>
          </table>
        </div>
      )}
      {data.batting.top_values && (
        <div>
          <span>Top Batting Values</span>
          <table className="table table-borderless">
            <thead>
              <tr>
                {renderHead([
                  "Pitch Type",
                  "Distance",
                  "Launch Angle",
                  "Exit Velocity",
                ])}
              </tr>
            </thead>
            <tbody>{renderRows("batting", data.batting.top_values)}</tbody>
          </table>
        </div>
      )}
      {data.batting.average_values && (
        <div>
          <span>Average Batting Values</span>
          <table className="table table-borderless">
            <thead>
              <tr>
                {renderHead([
                  "Pitch Type",
                  "Distance",
                  "Launch Angle",
                  "Exit Velocity",
                ])}
              </tr>
            </thead>
            <tbody>{renderRows("batting", data.batting.average_values)}</tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AvarageValuesTable;
