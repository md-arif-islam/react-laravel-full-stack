import React from "react";

const Dashboard = () => {
  return (
    <div className="dashboard p-5">
      <div className="total">
        <div className="row">
          <div className="col-3">
            <div className="total__box text-center">
              <h1>2453</h1>
              <h2>Total Sell</h2>
            </div>
          </div>
          <div className="col-3">
            <div className="total__box text-center">
              <h1>1234</h1>
              <h2>Manager</h2>
            </div>
          </div>
          <div className="col-3">
            <div className="total__box text-center">
              <h1>1234</h1>
              <h2>Pharmacist</h2>
            </div>
          </div>
          <div className="col-3">
            <div className="total__box text-center">
              <h1>1234</h1>
              <h2>Salesman</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
