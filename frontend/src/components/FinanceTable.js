import React from "react";
import "./FinanceTable.css"; 

const FinanceTable = () => {
  return (
    <table className="finance-table">
      <thead>
        <tr>
          <th>Date</th>
          <th>Amount</th>
          <th>Category</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>01/03/2025</td>
          <td>$500</td>
          <td>Food</td>
          <td>Expense</td>
        </tr>
      </tbody>
    </table>
  );
};

export default FinanceTable;
