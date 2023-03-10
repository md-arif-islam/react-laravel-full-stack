import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import avatar from "../../assets/img/avatar.png";
import axiosClient from "../../axios-client";

const Managers = () => {
    const [loading, setLoading] = useState(false);

    function handleDeleteClick() {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this item?"
        );
        if (confirmDelete) {
            // handle delete logic
        }
    }

    useEffect(() => {
        getManagers();
    }, []);

    const getManagers = () => {
        setLoading(true);
        axiosClient
            .get("/managers")
            .then(({ data }) => {
                setLoading(false);
                console.log(data);
            })
            .catch(() => {
                setLoading(false);
            });
    };

    return (
        <div className="manager">
            <div className="allManager">
                <div className="main__table">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Avater</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone</th>
                                {/* Only For Admin */}
                                <th scope="col">Edit</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <center>
                                        <img
                                            className="rounded-circle"
                                            width={40}
                                            height={40}
                                            src={avatar}
                                            alt=""
                                        />
                                    </center>
                                </td>
                                <td>MD Arif Islam</td>
                                <td>arifislamarif344@gmail.com</td>
                                <td>01704307597</td>
                                {/* Only For Admin */}
                                <td>
                                    <Link to="#">
                                        <i className="fas fa-edit" />
                                    </Link>
                                </td>
                                <td>
                                    <Link
                                        className="delete"
                                        onClick={handleDeleteClick}
                                        to="#"
                                    >
                                        <i className="fas fa-trash" />
                                    </Link>
                                    "
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Managers;
