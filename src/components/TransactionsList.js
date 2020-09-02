import React from "react";
import Transaction from "./Transaction";

class TransactionsList extends React.Component {
  
  
  renderTransactions = () => {
    return this.props.transactions.map((transaction) => {
      return <Transaction transaction={transaction}/>
    })}

  render() { 
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
        {this.renderTransactions()}
      </tbody>
    </table>
  );
};
}


export default TransactionsList;
