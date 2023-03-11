import React, { useState } from "react";
import avatar from "../../assets/img/avatar.png";
import { useStateContext } from "../../context/ContextProvider";

const UpdateProfile = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { user } = useStateContext();

    function handleImageClick() {
        document.getElementById("pimgi").click();
    }

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

    const onChange = () => {
        document.getElementById("pimg").src = window.URL.createObjectURL(
            this.files[0]
        );
    };

    return (
        <div className="userProfileEdit">
            <div className="main__form">
                <div className="main__form--title text-center">
                    Update My Profile
                </div>
                <form encType="multipart/form-data" action="#" method="POST">
                    <div className="form-row">
                        <div className="col col-12 text-center pb-3">
                            <img
                                id="pimg"
                                src={avatar}
                                className="img-fluid rounded-circle"
                                onClick={handleImageClick}
                                alt=""
                            />
                            <i className="fas fa-pen pimgedit" />
                            <input
                                onChange={onChange}
                                id="pimgi"
                                style={{ display: "none" }}
                                type="file"
                                name="avatar"
                            />
                        </div>
                        <div className="col col-12">
                            <p style={{ color: "red" }} className="text-center">
                                Please make sure this file is jpg, png or jpeg
                            </p>
                        </div>
                        <div className="col col-12">
                            <label className="input">
                                <i id="left" className="fas fa-user-circle" />
                                <input
                                    type="text"
                                    name="fname"
                                    placeholder="First name"
                                    defaultValue={user.first_name}
                                    required
                                />
                            </label>
                        </div>
                        <div className="col col-12">
                            <label className="input">
                                <i id="left" className="fas fa-user-circle" />
                                <input
                                    type="text"
                                    name="lname"
                                    placeholder="Last Name"
                                    defaultValue={user.last_name}
                                    required
                                />
                            </label>
                        </div>
                        <div className="col col-12">
                            <label className="input">
                                <i id="left" className="fas fa-envelope" />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    defaultValue={user.email}
                                    required
                                />
                            </label>
                        </div>
                        <div className="col col-12">
                            <label className="input">
                                <i id="left" className="fas fa-phone-alt" />
                                <input
                                    type="number"
                                    name="phone"
                                    placeholder="Phone"
                                    defaultValue={user.phone}
                                    required
                                />
                            </label>
                        </div>
                        <div className="col col-12">
                            <label className="input">
                                <i id="left" className="fas fa-key" />
                                <input
                                    id="pwdinput"
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                />
                                <i
                                    id="pwd"
                                    onClick={handlePasswordClick}
                                    className="fas fa-eye right"
                                />
                            </label>
                        </div>
                        <div className="col col-12">
                            <input type="submit" defaultValue="Update" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateProfile;
