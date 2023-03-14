import React, { useRef, useState } from "react";
import axiosClient from "../../axios-client";
import { useStateContext } from "../../context/ContextProvider";
import "./login.scss";

const Login = () => {
    const email = useRef();
    const password = useRef();
    const { setUser, setToken } = useStateContext();
    const [showPassword, setShowPassword] = useState(false);
    const [message, setMessage] = useState(null);

    function handlePasswordClick() {
        setShowPassword(!showPassword);
        var input = document.getElementById("pwdinput");
        if (input.type === "password") {
            input.type = "text";
        } else {
            input.type = "password";
        }
        input.focus();
    }

    const onSubmit = (e) => {
        e.preventDefault();

        const paylod = {
            email: email.current.value,
            password: password.current.value,
        };

        axiosClient
            .post("/login", paylod)
            .then(({ data }) => {
                setUser(data.user);
                setToken(data.token);
            })
            .catch((err) => {
                const response = err.response;
                if (response && response.status === 422) {
                    setMessage(response.data.message);
                }
            });
    };

    return (
        <div className="login">
            <div className="container">
                <div className="login__form">
                    <div className="login__form--title text-center">Log In</div>
                    <form onSubmit={onSubmit}>
                        <div className="form-row">
                            {message && (
                                <div className="col col-12">
                                    <h5
                                        style={{
                                            backgroundColor: "red",
                                            color: "#fff",
                                            padding: "10px",
                                        }}
                                        className="text-center"
                                    >
                                        {message}
                                    </h5>
                                </div>
                            )}
                            <div className="col col-12">
                                <label className="input">
                                    <i
                                        id="left"
                                        className="fas fa-envelope left"
                                    ></i>
                                    <input
                                        type="text"
                                        name="email"
                                        placeholder="Email"
                                        required
                                        ref={email}
                                    />
                                </label>
                            </div>
                            <div className="col col-12">
                                <label className="input">
                                    <i id="left" className="fas fa-key"></i>
                                    <input
                                        id="pwdinput"
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        required
                                        ref={password}
                                    />
                                    <i
                                        id="pwd"
                                        onClick={handlePasswordClick}
                                        className="fas fa-eye right"
                                    ></i>
                                </label>
                            </div>

                            <div className="col col-12">
                                <input type="submit" value="Submit" />
                            </div>
                        </div>
                    </form>
                    <div className="login__form--title--semi text-center">
                        Or
                    </div>
                    <div className="social_icons text-center">
                        <button
                            type="button"
                            className="btn btn-rounded btn-icon google"
                        >
                            <i className="fab fa-google"></i>
                        </button>
                        <button
                            type="button"
                            className="btn btn-rounded btn-icon github"
                        >
                            <i className="fab fa-github"></i>
                        </button>
                        <button
                            type="button"
                            className="btn btn-rounded btn-icon facebook"
                        >
                            <i className="fab fa-facebook"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
