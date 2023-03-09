import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import axiosClient from "../../axios-client";
import { useStateContext } from "../../context/ContextProvider";
import Sidebar from "../Sidebar/Sidebar";
import Topbar from "../Topbar/Topbar";

const DefaultLayout = () => {
    const { user, token, setUser } = useStateContext();

    if (!token) {
        return <Navigate to="/login" />;
    }

    useEffect(() => {
        axiosClient.get("/user").then(({ data }) => {
            setUser(data);
        });
    }, []);

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
