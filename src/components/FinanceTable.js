import React from "react";
import "./FinanceTable.css";

const FinanceTable = () => {
  return (
    <div className="table-container">
      <h2>Transaction Summary</h2>
      <table>
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>Credit Amount</th>
            <th>Debit Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>2</td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default FinanceTable;
