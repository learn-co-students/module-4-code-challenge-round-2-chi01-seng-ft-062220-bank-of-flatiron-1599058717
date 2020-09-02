import React from "react";


const Transaction = (transObj) => {
  return (
    <tr>
      <td>{transObj.transactions.date}</td>
      <td>{transObj.transactions.description}</td>
      <td>{transObj.transactions.category}</td>
      <td>{transObj.transactions.amount}</td>
    </tr>
  );
};

export default Transaction;
