import avatar from "../../assets/img/avatar.png";

const UpdatePharmacist = () => {
    function handleImageClick() {
        document.getElementById("pimgi").click();
    }

    const onChange = () => {
        document.getElementById("pimg").src = window.URL.createObjectURL(
            this.files[0]
        );
    };

    return (
        <div className="pharmacist">
            <div className="updatePharmacist">
                <div className="main__form">
                    <div className="main__form--title text-center">
                        Update Pharmacist
                    </div>
                    <form action="#" method="POST">
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
                                <p
                                    style={{ color: "red" }}
                                    className="text-center"
                                >
                                    Please make sure this file is jpg, png or
                                    jpeg
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
                                        defaultValue="Arif"
                                        required=""
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
                                        defaultValue="Islam"
                                        required=""
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
                                        defaultValue="arifislamarif344@gmail.com"
                                        required=""
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
                                        defaultValue={"01704307597"}
                                        required=""
                                    />
                                </label>
                            </div>
                            <input
                                type="hidden"
                                name="action"
                                defaultValue="updatePharmacist"
                            />
                            <input type="hidden" name="id" defaultValue={1} />
                            <div className="col col-12">
                                <input type="submit" defaultValue="Update" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdatePharmacist;
