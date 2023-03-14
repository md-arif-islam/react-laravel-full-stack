import React from "react";
import { NavLink } from "react-router-dom";
import { useStateContext } from "../../context/ContextProvider";

const Sidebar = () => {
    const { isAdmin, isManager, isPharmacist, isSalesman } = useStateContext();

    return (
        <div id="sideber" className="sideber">
            <ul className="sideber__ber">
                <h2 className="sideber__panel">Pharmacy Management System</h2>
                <li id="left" className="sideber__item active">
                    <NavLink to="/">
                        <i id="left" className="fas fa-tachometer-alt" />
                        Dashboard
                    </NavLink>
                </li>
                {/* Only For Admin */}
                {isAdmin && (
                    <li
                        id="left"
                        className="sideber__item sideber__item--modify active"
                    >
                        <NavLink to="/managers/add">
                            <i id="left" className="fas fa-user-plus" />
                            Add Manager
                        </NavLink>
                    </li>
                )}
                <li id="left" className="sideber__item">
                    <NavLink to="/managers">
                        <i id="left" className="fas fa-user" />
                        All Manager
                    </NavLink>
                </li>
                {/* For Admin, Manager */}
                {(isAdmin || isManager) && (
                    <li
                        id="left"
                        className="sideber__item sideber__item--modify"
                    >
                        <NavLink to="/pharmacists/add">
                            <i id="left" className="fas fa-user-plus" />
                            Add Pharmacist
                        </NavLink>
                    </li>
                )}
                <li id="left" className="sideber__item">
                    <NavLink to="/pharmacists">
                        <i id="left" className="fas fa-user" />
                        All Pharmacist
                    </NavLink>
                </li>
                {/* For Admin, Manager, Pharmacist*/}
                {(isAdmin || isManager || isPharmacist) && (
                    <li
                        id="left"
                        className="sideber__item sideber__item--modify"
                    >
                        <NavLink to="/salesmen/add">
                            <i id="left" className="fas fa-user-plus" />
                            Add Salesman
                        </NavLink>
                    </li>
                )}

                <li id="left" className="sideber__item">
                    <NavLink to="/salesmen">
                        <i id="left" className="fas fa-user" />
                        All Salesman
                    </NavLink>
                </li>
            </ul>
            <footer className="text-center">
                <span>MD Arif Islam</span>
                <br />
                ©2023 PMS All right reserved.
            </footer>
        </div>
    );
};

export default Sidebar;
