import React, { useEffect, useState } from "react";
import axiosClient from "../../axios-client";

const Dashboard = () => {
    const [dashboardData, setDashboardData] = useState({
        managerCount: 0,
        pharmacistCount: 0,
        salesmanCount: 0,
    });
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getDashboardData();
    }, []);

    const getDashboardData = () => {
        setLoading(true);
        axiosClient
            .get("/dashboard")
            .then(({ data }) => {
                setLoading(false);
                setDashboardData(data);
            })

            .catch(() => {
                setLoading(false);
            });
    };

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
                            <h1>{dashboardData.managerCount}</h1>
                            <h2>Manager</h2>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="total__box text-center">
                            <h1>{dashboardData.pharmacistCount}</h1>
                            <h2>Pharmacist</h2>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="total__box text-center">
                            <h1>{dashboardData.salesmanCount}</h1>
                            <h2>Salesman</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
