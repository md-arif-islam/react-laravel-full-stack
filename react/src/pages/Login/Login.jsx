import React from "react";
import "./login.scss";

const Login = () => {
    const onSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="login">
            <div className="container">
                <div className="login__form">
                    <div className="login__form--title text-center">Log In</div>
                    <form onSubmit={onSubmit}>
                        <div className="form-row">
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
                                    />
                                    <i
                                        id="pwd"
                                        className="fas fa-eye right"
                                    ></i>
                                </label>
                            </div>

                            {/* <h5 className="text-center">
                Email, Password & Role Doesn't match Or Something is Wrong
              </h5> */}
                            <div className="col col-12">
                                <input type="submit" value="Submit" />
                            </div>
                        </div>
                    </form>
                    <div className="login__form--title--semi text-center">
                        Or
                    </div>
                    <div className="icons text-center">
                        <button
                            type="button"
                            class="btn btn-rounded btn-icon google"
                        >
                            <i class="fab fa-google"></i>
                        </button>
                        <button
                            type="button"
                            class="btn btn-rounded btn-icon github"
                        >
                            <i class="fab fa-github"></i>
                        </button>
                        <button
                            type="button"
                            class="btn btn-rounded btn-icon facebook"
                        >
                            <i class="fab fa-facebook"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
