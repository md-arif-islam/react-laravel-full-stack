import React from "react";
import { Link } from "react-router-dom";
import avatar from "../../assets/img/avatar.png";
import axiosClient from "../../axios-client";
import { useStateContext } from "../../context/ContextProvider";

const Topbar = () => {
    const { user, setUser, setToken } = useStateContext();

    const onLogout = (e) => {
        e.preventDefault();

        axiosClient.post("/logout").then(() => {
            setUser({});
            setToken(null);
        });
    };

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
                        {user.first_name + " " + user.last_name} ( {user.role} )
                    </button>
                    <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                    >
                        <Link className="dropdown-item" to="/">
                            Dashboard
                        </Link>
                        <Link className="dropdown-item" to="/profile">
                            Profile
                        </Link>
                        <Link className="dropdown-item" onClick={onLogout}>
                            Log Out
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Topbar;
