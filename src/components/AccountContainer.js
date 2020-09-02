import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  render() {
    return (
      <div>
        <Search searchTransaction={this.props.searchTransaction} />
        <AddTransactionForm addTransaction={this.props.addTransaction}/>
        <TransactionsList inputValue={this.props.inputValue} transactions={this.props.transactions} />
      </div>
    );
  }
}

export default AccountContainer;
