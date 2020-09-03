import React from "react";

const Transaction = (props) => {
  const {id, date, description, category, amount} = props.transaction
  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
      <td>
      <button className="ui button" type="submit" onClick={(e) => props.removeTransaction(e, id)}>
            Remove Transaction
        </button>
      </td>
    </tr>
  );
};

export default Transaction;
