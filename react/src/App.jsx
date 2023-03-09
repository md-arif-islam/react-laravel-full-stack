import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Dashboard from "./pages/Dashboard/Dashboard";
import Layout from "./pages/Layout/Layout";
import Login from "./pages/Login/Login";
import AddManager from "./pages/Managers/AddManager";
import UpdateManager from "./pages/Managers/UpdateManager";
import Managers from "./pages/Managers/Managers";
import Pharmacists from "./pages/Pharmacists/Pharmacists";
import AddPharmacist from "./pages/Pharmacists/addPharmacist";
import UpdatePharmacist from "./pages/Pharmacists/UpdatePharmacist";
import Salesmen from "./pages/Salesmen/Salesmen";
import AddSalesman from "./pages/Salesmen/addSalesman";
import UpdateSalesman from "./pages/Salesmen/UpdateSalesman";
import Profile from "./pages/Profile/Profile";
import UpdateProfile from "./pages/Profile/UpdateProfile";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="/managers" element={<Managers />} />
                    <Route path="/managers/add" element={<AddManager />} />
                    <Route
                        path="/managers/update"
                        element={<UpdateManager />}
                    />

                    <Route path="/pharmacists" element={<Pharmacists />} />
                    <Route
                        path="/pharmacists/add"
                        element={<AddPharmacist />}
                    />
                    <Route
                        path="/pharmacists/update"
                        element={<UpdatePharmacist />}
                    />

                    <Route path="/salesmen" element={<Salesmen />} />
                    <Route path="/salesmen/add" element={<AddSalesman />} />
                    <Route
                        path="/salesmen/update"
                        element={<UpdateSalesman />}
                    />

                    <Route path="/profile" element={<Profile />} />
                    <Route path="/profile/update" element={<UpdateProfile />} />
                </Route>
                <Route path="/login" element={<Login />} />
            </Routes>
        </>
    );
}

export default App;
