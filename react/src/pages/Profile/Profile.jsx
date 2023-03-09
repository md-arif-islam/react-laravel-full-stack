import React from "react";
import avatar from "../../assets/img/avatar.png";

const Profile = () => {
  return (
    <div className="userProfile">
      <div className="main__form myProfile">
        <form action="#">
          <div className="main__form--title myProfile__title text-center">
            My Profile
          </div>
          <div className="form-row text-center">
            <div className="col col-12 text-center pb-3">
              <img src={avatar} className="img-fluid rounded-circle" alt="" />
            </div>
            <div className="col col-12">
              <h4>
                <b>Full Name : </b>
                MD Arif Islam
              </h4>
            </div>
            <div className="col col-12">
              <h4>
                <b>Email : </b>
                arifislamarif344@gmail.com
              </h4>
            </div>
            <div className="col col-12">
              <h4>
                <b>Phone : </b>
                01704307597
              </h4>
            </div>
            <input type="hidden" name="id" defaultValue="userProfileEdit" />
            <div className="col col-12">
              <input
                className="updateMyProfile"
                type="submit"
                defaultValue="Update Profile"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
