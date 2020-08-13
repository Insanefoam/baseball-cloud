import React, { useEffect, useState } from "react";
import "./LeaderbordTable.css";
import { getBattingLeaderboard, getPithcingLeaderboard } from "api";

//TODO: Create renderHead function
//TODO: Create renderRows function
const battingHead = [
  "Rank",
  "Batter Name",
  "Age",
  "School",
  "Teams",
  "Exit Velocity",
  "Launch Angle",
  "Distance",
  "Favorite",
];

const pitchingHead = [
  "Rank",
  "Pitcher Name",
  "Age",
  "School",
  "Teams",
  "Pitch Type",
  "Velocity",
  "Spin Rate",
  "Favorite",
];

const renderHead = (type) => {
  if (type === "batting") {
    return battingHead.map((el, index) => (
      <th scope="col" key={index}>
        {el}
      </th>
    ));
  } else {
    return pitchingHead.map((el, index) => (
      <th scope="col" key={index}>
        {el}
      </th>
    ));
  }
};

const renderRows = (type, data) => {
  if (type === "batting") {
    return data.map((el, index) => (
      <tr key={index}>
        <th scope="row">{index + 1}</th>
        <td>{el.batter_name}</td>
        <td>{el.age}</td>
        <td>{el.school.name}</td>
        <td>{el.teams[0].name}</td>
        <td>{el.exit_velocity}</td>
        <td>{el.launch_angle || "-"}</td>
        <td>{el.distance}</td>
        <td>{String(el.favorite)}</td>
      </tr>
    ));
  } else {
    return data.map((el, index) => (
      <tr key={index}>
        <th scope="row">{index + 1}</th>
        <td>{el.pitcher_name}</td>
        <td>{el.age}</td>
        <td>{el.school.name}</td>
        <td>{el.teams[0].name}</td>
        <td>{el.pitch_type}</td>
        <td>{el.velocity || "-"}</td>
        <td>{el.spin_rate}</td>
        <td>{String(el.favorite)}</td>
      </tr>
    ));
  }
};

const LeaderbordTable = ({ config }) => {
  const tableType = config.batPitch;
  const [data, setData] = useState([]);

  useEffect(() => {
    if (config.batPitch === "batting") {
      getBattingLeaderboard({ ...config, batPitch: undefined }).then((res) =>
        setData(res.data.data.leaderboard_batting.leaderboard_batting)
      );
    } else {
      getPithcingLeaderboard({ ...config, batPitch: undefined }).then((res) =>
        setData(res.data.data.leaderboard_pitching.leaderboard_pitching)
      );
    }
  }, [config]);

  return (
    <div>
      <table className="table">
        <thead>
          <tr>{renderHead(tableType)}</tr>
        </thead>
        <tbody>{renderRows(tableType, data)}</tbody>
      </table>
    </div>
  );
};

export default LeaderbordTable;
