import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import Topbar from "../Topbar/Topbar";

const Layout = () => {
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

export default Layout;
