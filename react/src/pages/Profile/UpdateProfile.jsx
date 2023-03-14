import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import avatar from "../../assets/img/avatar.png";
import axiosClient from "../../axios-client";
import { useStateContext } from "../../context/ContextProvider";

const UpdateProfile = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { user, setUser } = useStateContext();
    const [message, setMessage] = useState(null);
    const navigate = useNavigate();

    const [file, setFile] = useState(null);

    function handleImageClick() {
        document.getElementById("pimgi").click();
    }

    const onChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
    };

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

    const first_name = useRef();
    const last_name = useRef();
    const email = useRef();
    const phone = useRef();
    const password = useRef();

    const onSubmit = (e) => {
        e.preventDefault();

        const paylod = {
            first_name: first_name.current.value,
            last_name: last_name.current.value,
            email: email.current.value,
            phone: phone.current.value,
            password: password.current.value,
            avatar: file,
        };

        axiosClient
            .post(`/profile/${user.id}`, paylod, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then(({ data }) => {
                setUser(data.data);
                navigate("/profile");
            })
            .catch((err) => {
                const response = err.response;
                if (response && response.status === 422) {
                    setMessage(response.data.message);
                }
            });
    };

    return (
        <div className="userProfileEdit">
            <div className="main__form">
                <div className="main__form--title text-center">
                    Update My Profile
                </div>
                <form onSubmit={onSubmit}>
                    <div className="form-row">
                        <div className="col col-12 text-center pb-3">
                            <img
                                id="pimg"
                                src={
                                    !file
                                        ? user.avatar
                                            ? `http://localhost:8000/storage/avatars/${user.avatar}`
                                            : avatar
                                        : URL.createObjectURL(file)
                                }
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
                                    ref={first_name}
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
                                    ref={last_name}
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
                                    ref={email}
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
                                    ref={phone}
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
                                    ref={password}
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
