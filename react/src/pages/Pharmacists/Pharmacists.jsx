import React from "react";
import { Link } from "react-router-dom";
import avatar from "../../assets/img/avatar.png";

const Pharmacists = () => {
  function handleDeleteClick() {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this item?"
    );
    if (confirmDelete) {
      // handle delete logic
    }
  }

  return (
    <div className="pharmacist">
      <div className="allPharmacist">
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
                  <Link className="delete" onClick={handleDeleteClick} to="#">
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

export default Pharmacists;
