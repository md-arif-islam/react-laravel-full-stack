import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import AddManager from "./pages/Managers/AddManager";
import Managers from "./pages/Managers/Managers";
import Pharmacists from "./pages/Pharmacists/Pharmacists";
import AddPharmacist from "./pages/Pharmacists/addPharmacist";
import UpdatePharmacist from "./pages/Pharmacists/UpdatePharmacist";
import Salesmen from "./pages/Salesmen/Salesmen";
import AddSalesman from "./pages/Salesmen/addSalesman";
import UpdateSalesman from "./pages/Salesmen/UpdateSalesman";
import Profile from "./pages/Profile/Profile";
import UpdateProfile from "./pages/Profile/UpdateProfile";
import DefaultLayout from "./pages/Layout/DefaultLayout";
import GuestLayout from "./pages/Layout/GuestLayout";
import React from "react";
import UpdateManager from "./pages/Managers/UpdateManager";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<DefaultLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="/managers" element={<Managers />} />
                    <Route
                        path="/managers/add"
                        element={<AddManager key="userCreate" />}
                    />
                    <Route
                        path="/managers/:id"
                        element={<UpdateManager key="UserUpdate" />}
                    />

                    <Route path="/pharmacists" element={<Pharmacists />} />
                    <Route
                        path="/pharmacists/add"
                        element={<AddPharmacist />}
                    />
                    <Route
                        path="/pharmacists/:id"
                        element={<UpdatePharmacist />}
                    />

                    <Route path="/salesmen" element={<Salesmen />} />
                    <Route path="/salesmen/add" element={<AddSalesman />} />
                    <Route path="/salesmen/:id" element={<UpdateSalesman />} />

                    <Route path="/profile" element={<Profile />} />
                    <Route path="/profile/update" element={<UpdateProfile />} />
                </Route>
                <Route path="/" element={<GuestLayout />}>
                    <Route index element={<Login />} />
                    <Route path="/login" element={<Login />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
