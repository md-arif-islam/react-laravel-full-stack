import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import avatar from "../../assets/img/avatar.png";
import axiosClient from "../../axios-client";
import { useStateContext } from "../../context/ContextProvider";

const UpdateSalesman = () => {
    const handleImageClick = () => {
        document.getElementById("pimgi").click();
    };

    const onChange = () => {
        document.getElementById("pimg").src = window.URL.createObjectURL(
            this.files[0]
        );
    };

    const navigate = useNavigate();

    let { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(null);

    const [user, setUser] = useState({
        id: null,
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
    });

    if (id) {
        useEffect(() => {
            setLoading(true);
            // how to upload avatar give me full code
            axiosClient.post;

            axiosClient
                .get(`/salesmen/${id}`)
                .then(({ data }) => {
                    setLoading(false);
                    setUser(data.data);
                })
                .catch(() => {
                    setLoading(false);
                });
        }, []);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        axiosClient
            .put(`/salesmen/${user.id}`, user)
            .then(() => {
                navigate("/salesmen");
            })
            .catch((err) => {
                const response = err.response;
                if (response && response.status === 422) {
                    setMessage(response.data.message);
                }
            });
    };

    return (
        <div className="salesman">
            <div className="updateSalesman">
                {!loading && (
                    <div className="main__form">
                        <div className="main__form--title text-center">
                            Update Salesman
                        </div>
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
                                    <p
                                        style={{ color: "red" }}
                                        className="text-center"
                                    >
                                        Please make sure this file is jpg, png
                                        or jpeg
                                    </p>
                                </div>
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
                                            defaultValue={user.first_name}
                                            required
                                            onChange={(e) =>
                                                setUser({
                                                    ...user,
                                                    first_name: e.target.value,
                                                })
                                            }
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
                                            defaultValue={user.last_name}
                                            required
                                            onChange={(e) =>
                                                setUser({
                                                    ...user,
                                                    last_name: e.target.value,
                                                })
                                            }
                                        />
                                    </label>
                                </div>
                                <div className="col col-12">
                                    <label className="input">
                                        <i
                                            id="left"
                                            className="fas fa-envelope"
                                        />
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                            defaultValue={user.email}
                                            required
                                            onChange={(e) =>
                                                setUser({
                                                    ...user,
                                                    email: e.target.value,
                                                })
                                            }
                                        />
                                    </label>
                                </div>
                                <div className="col col-12">
                                    <label className="input">
                                        <i
                                            id="left"
                                            className="fas fa-phone-alt"
                                        />
                                        <input
                                            type="number"
                                            name="phone"
                                            placeholder="Phone"
                                            defaultValue={user.phone}
                                            required
                                            onChange={(e) =>
                                                setUser({
                                                    ...user,
                                                    phone: e.target.value,
                                                })
                                            }
                                        />
                                    </label>
                                </div>
                                <div className="col col-12">
                                    <input
                                        type="submit"
                                        defaultValue="Update"
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};

export default UpdateSalesman;
