import React from "react";
import Sidebar from "../components/Sidebar";
import CardStats from "../components/CardStats";
import FinanceTable from "../components/FinanceTable";
import "./Dashboard.css"; 



const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard-content">
        <div className="dashboard-main">
          <CardStats />
          <FinanceTable />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
