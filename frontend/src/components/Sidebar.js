import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css"; 

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Finance Manager</h2>
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/transactions">Transactions</Link></li>
        <li><Link to="/settings">Settings</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
