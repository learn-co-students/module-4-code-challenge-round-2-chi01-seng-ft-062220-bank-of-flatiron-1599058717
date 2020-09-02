import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  render() {
    return (
      <div>
        <Search transactions={this.props.transactions} filterTransactions={this.props.filterTransactions}/>
        <AddTransactionForm newTransaction={this.props.newTransaction}/>
        <TransactionsList transactions={this.props.transactions}/>
      </div>
    );
  }
}

export default AccountContainer;
