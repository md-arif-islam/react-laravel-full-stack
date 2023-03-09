import React from "react";
import { Link } from "react-router-dom";
import avatar from "../../assets/img/avatar.png";

const Topbar = (z) => {
  return (
    <div className="topber">
      <div className="topber__title">
        {/* <span className="topber__title--text">DashBoard</span> */}
      </div>
      <div className="topber__profile">
        <img
          src={avatar}
          height={25}
          width={25}
          className="rounded-circle"
          alt="profile"
        />
        <div className="dropdown">
          <button
            className="btn dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            MD Arif Islam
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <Link className="dropdown-item" to="/">
              Dashboard
            </Link>
            <Link className="dropdown-item" to="/profile">
              Profile
            </Link>
            <Link className="dropdown-item" to="/login">
              Log Out
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
