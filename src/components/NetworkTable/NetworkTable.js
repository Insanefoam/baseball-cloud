import React, { useEffect, useState } from "react";
import "./NetworkTable.css";
import { updateFavorite, getProfiles } from "api";
import { NavLink } from "react-router-dom";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const head = ["Player Name", "Sessions", "School", "Teams", "Age", "Favorite"];

const NetworkTable = ({ config }) => {
  const [data, setData] = useState([]);
  const [isFetching, setFetching] = useState(false);

  const makeFavorite = (id, value) => {
    updateFavorite(id, value).then((res) =>
      setData(
        data.map((row) =>
          row.id === id || row.id === id
            ? { ...row, favorite: !row.favorite }
            : row
        )
      )
    );
  };

  const renderHead = () => {
    return head.map((el, index) => (
      <th scope="col" key={index}>
        {el}
      </th>
    ));
  };

  const renderRows = (data) => {
    console.log(data);
    return data.map((el, index) => (
      <tr key={index}>
        <td>
          <NavLink to={`/profile/${el.batter_datraks_id}`}>
            {`${el.first_name} ${el.last_name}`}
          </NavLink>
        </td>
        <td>{el.sessions || "-"}</td>
        <td>{el.school ? el.school.name : "-"}</td>
        <td>{el.teams[0] ? el.teams[0].name : "-"}</td>
        <td>{el.age}</td>
        <td>
          {el.favorite ? (
            <FontAwesomeIcon
              icon={solidHeart}
              color="#48BBFF"
              onClick={() => makeFavorite(el.batter_datraks_id, !el.favorite)}
            />
          ) : (
            <FontAwesomeIcon
              icon={regularHeart}
              color="#48BBFF"
              onClick={() => makeFavorite(el.batter_datraks_id, !el.favorite)}
            />
          )}
        </td>
      </tr>
    ));
  };

  useEffect(() => {
    getProfiles(config.profiles_count, config.offset).then((res) =>
      setData(res.data.data.profiles.profiles)
    );
  }, [config]);

  return (
    <div>
      <table className="table table-borderless">
        <thead>
          <tr>{renderHead()}</tr>
        </thead>
        <tbody>{renderRows(data)}</tbody>
      </table>
    </div>
  );
};

export default NetworkTable;
