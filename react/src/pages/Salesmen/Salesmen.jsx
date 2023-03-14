import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import avatar from "../../assets/img/avatar.png";
import axiosClient from "../../axios-client";
import { useStateContext } from "../../context/ContextProvider";

const Salesmen = () => {
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);
    const { isAdmin, isManager, isPharmacist } = useStateContext();

    function onDelete(user) {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this item?"
        );
        if (confirmDelete) {
            axiosClient.delete(`/salesmen/${user.id}`, user).then(() => {
                getSalesmen();
            });
        }
    }

    useEffect(() => {
        getSalesmen();
    }, []);

    const getSalesmen = () => {
        setLoading(true);
        axiosClient
            .get("/salesmen")
            .then(({ data }) => {
                setLoading(false);
                setUsers(data.data);
            })
            .catch(() => {
                setLoading(false);
            });
    };

    return (
        <div className="salesman">
            <div className="allSalesman">
                <div className="main__table">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Avater</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone</th>
                                {(isAdmin || isManager || isPharmacist) && (
                                    <>
                                        <th scope="col">Edit</th>
                                        <th scope="col">Delete</th>
                                    </>
                                )}
                            </tr>
                        </thead>
                        {loading && (
                            <tbody>
                                <tr>
                                    <td className="text-center" colSpan="6">
                                        Loading . . .
                                    </td>
                                </tr>
                            </tbody>
                        )}
                        {!loading && (
                            <tbody>
                                {users.map((user) => (
                                    <tr key={user.id}>
                                        <td>
                                            <center>
                                                <img
                                                    className="rounded-circle"
                                                    width={40}
                                                    height={40}
                                                    src={
                                                        user.avatar
                                                            ? `http://localhost:8000/storage/avatars/${user.avatar}`
                                                            : avatar
                                                    }
                                                    alt=""
                                                />
                                            </center>
                                        </td>
                                        <td>
                                            {user.first_name +
                                                " " +
                                                user.last_name}
                                        </td>
                                        <td>{user.email}</td>
                                        <td>{user.phone}</td>
                                        {(isAdmin ||
                                            isManager ||
                                            isPharmacist) && (
                                            <>
                                                <td>
                                                    <Link
                                                        to={`/salesmen/${user.id}`}
                                                    >
                                                        <i className="fas fa-edit" />
                                                    </Link>
                                                </td>
                                                <td>
                                                    <Link
                                                        className="delete"
                                                        onClick={(e) =>
                                                            onDelete(user)
                                                        }
                                                        to="#"
                                                    >
                                                        <i className="fas fa-trash" />
                                                    </Link>
                                                </td>
                                            </>
                                        )}
                                    </tr>
                                ))}
                            </tbody>
                        )}
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Salesmen;
