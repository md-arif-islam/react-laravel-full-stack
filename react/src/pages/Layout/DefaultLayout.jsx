import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../../context/ContextProvider";
import Sidebar from "../Sidebar/Sidebar";
import Topbar from "../Topbar/Topbar";

const DefaultLayout = () => {
    const { user, token } = useStateContext();

    if (!token) {
        return <Navigate to="/login" />;
    }

    return (
        <>
            {/*------------------------------- Topbar Navber ------------------------------*/}
            <Topbar />
            {/*------------------------------- Secondary Navber ------------------------------*/}
            {/*------------------------------- Sideber ------------------------------*/}
            <Sidebar />
            {/*------------------------------- #Sideber ------------------------------*/}
            {/*------------------------------- Main section ------------------------------*/}
            <section className="main">
                <div className="container">
                    <Outlet />
                </div>
            </section>
        </>
    );
};

export default DefaultLayout;
