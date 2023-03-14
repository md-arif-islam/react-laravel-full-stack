import React from "react";
import { Link } from "react-router-dom";
import avatar from "../../assets/img/avatar.png";
import { useStateContext } from "../../context/ContextProvider";

const Profile = () => {
    const { user } = useStateContext();

    return (
        <div className="userProfile">
            <div className="main__form myProfile">
                <form action="#">
                    <div className="main__form--title myProfile__title text-center">
                        My Profile
                    </div>
                    <div className="form-row text-center">
                        <div className="col col-12 text-center pb-3">
                            <img
                                src={
                                    user.avatar
                                        ? `http://localhost:8000/storage/avatars/${user.avatar}`
                                        : avatar
                                }
                                className="img-fluid rounded-circle"
                                alt=""
                            />
                        </div>
                        <div className="col col-12">
                            <h4>
                                <b>Full Name : </b>
                                {user.first_name + " " + user.last_name}
                            </h4>
                        </div>
                        <div className="col col-12">
                            <h4>
                                <b>Email : </b>
                                {user.email}
                            </h4>
                        </div>
                        <div className="col col-12">
                            <h4>
                                <b>Phone : </b>
                                {user.phone}
                            </h4>
                        </div>

                        <div className="col col-12">
                            <Link to="/profile/update">Update Profile</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Profile;
