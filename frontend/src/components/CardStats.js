import React from "react";
import "./CardStats.css";  

const CardStats = () => {
  return (
    <div className="cards">
      <div className="card">Total Balance: $5000</div>
      <div className="card">Total Credit: $3000</div>
      <div className="card">Total Debit: $2000</div>
    </div>
  );
};

export default CardStats;
