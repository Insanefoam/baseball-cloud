import React, { useEffect, useState } from "react";
import { updateFavorite, getProfiles } from "api";
import { NavLink } from "react-router-dom";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./NetworkTable.css";

const head = ["Player Name", "Sessions", "School", "Teams", "Age", "Favorite"];

const NetworkTable = ({ config, changeCount }) => {
  const [data, setData] = useState([]);
  const [allProfiles, setAllProfiles] = useState(0);
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  const makeFavoriteProfile = (id, value) => {
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
    return data.map((el, index) => (
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
              onClick={() => makeFavoriteProfile(el.id, !el.favorite)}
            />
          ) : (
            <FontAwesomeIcon
              icon={regularHeart}
              color="#48BBFF"
              onClick={() => makeFavoriteProfile(el.id, !el.favorite)}
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
    let buttons = [];
    for (let i = 0; i < count; i++) {
      buttons = [
        ...buttons,
        <li
          className={currentPage === i ? "page-item current" : "page-item"}
          onClick={() => {
            setOffset(visibleCount * i);
            setCurrentPage(i);
          }}
          key={i}
        >
          <a className="page-link" href="network#">
            {i + 1}
          </a>
        </li>,
      ];
    }
    return buttons;
  };

  useEffect(() => {
    getProfiles({ ...config, offset }).then((res) => {
      changeCount(res.data.data.profiles.total_count);
      setData(res.data.data.profiles.profiles);
      setAllProfiles(res.data.data.profiles.total_count);
    });
  }, [changeCount, config, offset]);

  return (
    <div>
      <table className="table table-borderless">
        <thead>
          <tr>{renderHead()}</tr>
        </thead>
        <tbody>{renderRows(data)}</tbody>
      </table>
      <nav aria-label="navigation" className="navigation">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="network#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          {config.profiles_count > 0
            ? renderPagination(allProfiles, config.profiles_count)
            : undefined}
          <li className="page-item">
            <a className="page-link" href="network#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NetworkTable;
