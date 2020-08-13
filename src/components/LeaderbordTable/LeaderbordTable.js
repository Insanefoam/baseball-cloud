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

  const rows = data.map((el, index) => (
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

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            {battingHead.map((el, index) => (
              <th scope="col" key={index}>
                {el}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
};

export default LeaderbordTable;
