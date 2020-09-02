import React from "react";
import Transaction from "./Transaction";

class TransactionsList extends React.Component {

renderTransactions(){
  //6.  X Mapping over transactions to render a 
  //      Transaction component with each object
  return this.props.transactions.map(transaction => 
  <Transaction 
  id={transaction.id}
  key={transaction.id}
    transaction={transaction}
    handleDelete={this.props.handleDelete}
  />)
}

  render(){
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
        {/* 7. X  invoking the function that we wrote at the top */}
        {this.renderTransactions()}
      </tbody>
    </table>
  );
};
}

export default TransactionsList;
