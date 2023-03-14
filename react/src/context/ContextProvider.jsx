import { createContext, useContext, useEffect, useState } from "react";

const StateContext = createContext({
    currentUser: null,
    token: null,
    notification: null,
    setUser: () => {},
    setToken: () => {},
    setNotification: () => {},
    isAdmin: null,
    isManager: null,
    isPharmacist: null,
    isSalesman: null,
});

export const ContextProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [token, _setToken] = useState(localStorage.getItem("ACCESS_TOKEN"));
    const [notification, setNotification] = useState("");
    const [isAdmin, setIsAdmin] = useState(false);
    const [isManager, setIsManager] = useState(false);
    const [isPharmacist, setIsPharmacist] = useState(false);
    const [isSalesman, setIsSalesman] = useState(false);

    useEffect(() => {
        if (user.role === "admin") {
            setIsAdmin(true);
        } else if (user.role === "manager") {
            setIsManager(true);
        } else if (user.role === "pharmacist") {
            setIsPharmacist(true);
        } else if (user.role === "salesman") {
            setIsSalesman(true);
        }
    }, [user.role]);

    const setToken = (token) => {
        _setToken(token);
        if (token) {
            localStorage.setItem("ACCESS_TOKEN", token);
        } else {
            localStorage.removeItem("ACCESS_TOKEN");
        }
    };

    return (
        <StateContext.Provider
            value={{
                user,
                setUser,
                token,
                setToken,
                notification,
                setNotification,
                isAdmin,
                isManager,
                isPharmacist,
                isSalesman,
            }}
        >
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);
