import React from "react";

class Transaction extends React.Component{

  render(){
  return (
    // 8. X Filling in the deets
    <tr>
      <td>{this.props.transaction.date}</td>
      <td>{this.props.transaction.description}</td>
      <td>{this.props.transaction.category}</td>
      <td>{this.props.transaction.amount}</td>
    </tr>
  );
};
}


export default Transaction;
