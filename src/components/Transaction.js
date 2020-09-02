import React from "react";

const Transaction = (props) => {
  return (
    <tr>
      <td>{props.transData.date}</td>
      <td>{props.transData.description}</td>
      <td>{props.transData.category}</td>
      <td>{props.transData.amount}</td>
      <td><button onClick={() => props.handleDelete(props.transData.id)} >DELETE</button></td>
    </tr>
  );
};

export default Transaction;
