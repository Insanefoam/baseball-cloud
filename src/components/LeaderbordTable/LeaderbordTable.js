import React, { useEffect, useState } from "react";
import "./LeaderbordTable.css";
import {
  getBattingLeaderboard,
  getPithcingLeaderboard,
  updateFavorite,
} from "api";
import { NavLink } from "react-router-dom";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

const LeaderbordTable = ({ filters }) => {
  const { playersType } = filters;
  const [playersInfo, setPlayersInfo] = useState([]);

  const updateFavoriteHandler = (id, value) => {
    updateFavorite(id, value).then((res) =>
      setPlayersInfo(
        playersInfo.map((row) =>
          row.batter_datraks_id === id || row.pitcher_datraks_id === id
            ? { ...row, favorite: !row.favorite }
            : row
        )
      )
    );
  };

  const renderHead = (playersType) => {
    if (playersType === "batting") {
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

  const renderRows = (playersType, rawPlayers) => {
    if (playersType === "batting") {
      return rawPlayers.map((el, index) => (
        <tr key={index}>
          <th scope="row">{index + 1}</th>
          <td>
            <NavLink to={`/profile/${el.batter_datraks_id}`}>
              {el.batter_name}
            </NavLink>
          </td>
          <td>{el.age}</td>
          <td>{el.school.name}</td>
          <td>{el.teams[0].name}</td>
          <td>{el.exit_velocity}</td>
          <td>{el.launch_angle || "-"}</td>
          <td>{el.distance}</td>
          <td>
            {el.favorite ? (
              <FontAwesomeIcon
                icon={solidHeart}
                color="#48BBFF"
                onClick={() =>
                  updateFavoriteHandler(el.batter_datraks_id, !el.favorite)
                }
              />
            ) : (
              <FontAwesomeIcon
                icon={regularHeart}
                color="#48BBFF"
                onClick={() =>
                  updateFavoriteHandler(el.batter_datraks_id, !el.favorite)
                }
              />
            )}
          </td>
        </tr>
      ));
    } else {
      return rawPlayers.map((el, index) => (
        <tr key={index}>
          <th scope="row">{index + 1}</th>
          <td>
            <NavLink to={`/profile/${el.pitcher_datraks_id}`}>
              {el.pitcher_name}
            </NavLink>
          </td>
          <td>{el.age}</td>
          <td>{el.school.name}</td>
          <td>{el.teams[0].name}</td>
          <td>{el.pitch_type}</td>
          <td>{el.velocity || "-"}</td>
          <td>{el.spin_rate}</td>
          <td>
            {el.favorite ? (
              <FontAwesomeIcon
                icon={solidHeart}
                color="#48BBFF"
                onClick={() => updateFavoriteHandler(el.pitcher_datraks_id)}
              />
            ) : (
              <FontAwesomeIcon
                icon={regularHeart}
                color="#48BBFF"
                onClick={() => updateFavoriteHandler(el.pitcher_datraks_id)}
              />
            )}
          </td>
        </tr>
      ));
    }
  };

  useEffect(() => {
    if (filters.playersType === "batting") {
      getBattingLeaderboard({ ...filters, playersType: undefined }).then(
        (res) => {
          setPlayersInfo(res.data.data.leaderboard_batting.leaderboard_batting);
        }
      );
    } else {
      getPithcingLeaderboard({
        ...filters,
        playersType: undefined,
      }).then((res) =>
        setPlayersInfo(res.data.data.leaderboard_pitching.leaderboard_pitching)
      );
    }
  }, [filters]);

  return (
    <div>
      <table className="table table-borderless">
        <thead>
          <tr>{renderHead(playersType)}</tr>
        </thead>
        <tbody>{renderRows(playersType, playersInfo)}</tbody>
      </table>
    </div>
  );
};

export default LeaderbordTable;
