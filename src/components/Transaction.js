import React from "react";

const Transaction = ({ deleteTransaction, transaction }) => {
  const { id, date, description, category, amount } = transaction;
  const button =
    description === "No matches found" ? null : (
      <button
        className="ui inverted red button"
        onClick={() => deleteTransaction(id)}
      >
        <i class="trash icon"></i>
      </button>
    );
  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
      <td>{button}</td>
    </tr>
  );
};

export default Transaction;
