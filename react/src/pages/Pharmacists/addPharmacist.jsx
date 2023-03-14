import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosClient from "../../axios-client";
import avatar from "../../assets/img/avatar.png";

const AddPharmacist = () => {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const [message, setMessage] = useState(null);
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

        console.log(paylod);

        axiosClient
            .post("/pharmacists", paylod, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then(() => {
                navigate("/pharmacists");
            })
            .catch((err) => {
                const response = err.response;
                if (response && response.status === 422) {
                    setMessage(response.data.message);
                }
            });
    };

    return (
        <div className="pharmacist">
            <div className="addPharmacist">
                <div className="main__form">
                    <div className="main__form--title text-center">
                        Add New Pharmacist
                    </div>
                    <form onSubmit={onSubmit}>
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
                        <div className="col col-12 text-center pb-3">
                            <img
                                id="pimg"
                                src={file ? URL.createObjectURL(file) : avatar}
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
                        <div className="form-row">
                            <div className="col col-12">
                                <label className="input">
                                    <i
                                        id="left"
                                        className="fas fa-user-circle"
                                    />
                                    <input
                                        type="text"
                                        name="fname"
                                        placeholder="First name"
                                        ref={first_name}
                                        required
                                    />
                                </label>
                            </div>
                            <div className="col col-12">
                                <label className="input">
                                    <i
                                        id="left"
                                        className="fas fa-user-circle"
                                    />
                                    <input
                                        type="text"
                                        name="lname"
                                        placeholder="Last Name"
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
                                        required
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
                                <input type="submit" defaultValue="Submit" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddPharmacist;
