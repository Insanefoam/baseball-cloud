import React, { useEffect, useState } from "react";
import { updateFavorite, getProfiles } from "api";
import { NavLink } from "react-router-dom";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./NetworkTable.css";

const head = ["Player Name", "Sessions", "School", "Teams", "Age", "Favorite"];

const NetworkTable = ({ filters, changeCount }) => {
  const [playersInfo, setPlayersInfo] = useState([]);
  const [allProfiles, setAllProfiles] = useState(0);
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  const updateFavoriteHandler = (id, value) => {
    updateFavorite(id, value).then((res) =>
      setPlayersInfo(
        playersInfo.map((row) =>
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

  const renderRows = (rawPlayers) => {
    return rawPlayers.map((el, index) => (
      <tr key={index}>
        <td>
          <NavLink to={`/profile/${el.id}`}>
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
              onClick={() => updateFavoriteHandler(el.id, !el.favorite)}
            />
          ) : (
            <FontAwesomeIcon
              icon={regularHeart}
              color="#48BBFF"
              onClick={() => updateFavoriteHandler(el.id, !el.favorite)}
            />
          )}
        </td>
      </tr>
    ));
  };

  const renderPagination = (profilesCount, visibleCount) => {
    const count =
      profilesCount % visibleCount === 0
        ? profilesCount / visibleCount
        : Math.ceil(profilesCount / visibleCount);
    if (count <= 1) return undefined;

    const buttons = new Array(count).fill("").map((_, index) => (
      <li
        className={currentPage === index ? "page-item current" : "page-item"}
        onClick={() => {
          setOffset(visibleCount * index);
          setCurrentPage(index);
        }}
        key={index}
      >
        <a className="page-link" href="network#">
          {index + 1}
        </a>
      </li>
    ));

    return (
      <nav aria-label="navigation" className="navigation">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="network#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          {buttons}
          <li className="page-item">
            <a className="page-link" href="network#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    );
  };

  useEffect(() => {
    getProfiles({ ...filters, offset }).then((res) => {
      changeCount(res.data.data.profiles.total_count);
      setPlayersInfo(res.data.data.profiles.profiles);
      setAllProfiles(res.data.data.profiles.total_count);
    });
  }, [changeCount, filters, offset]);

  return (
    <div>
      <table className="table table-borderless">
        <thead>
          <tr>{renderHead()}</tr>
        </thead>
        <tbody>{renderRows(playersInfo)}</tbody>
      </table>
      {filters.profiles_count > 0
        ? renderPagination(allProfiles, filters.profiles_count)
        : undefined}
    </div>
  );
};

export default NetworkTable;
