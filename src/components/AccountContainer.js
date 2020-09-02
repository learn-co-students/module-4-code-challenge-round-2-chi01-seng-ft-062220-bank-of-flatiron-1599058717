import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";
import SortBy from './SortBy'

class AccountContainer extends Component {
  render() {
    return (
      <div>
        <Search transactions={this.props.transactions} filterTransactions={this.props.filterTransactions}/>
        <SortBy handleSort={this.props.handleSort}/>
        <AddTransactionForm newTransaction={this.props.newTransaction}/>
        <TransactionsList removeTransaction={this.props.removeTransaction} transactions={this.props.transactions}/>
      </div>
    );
  }
}

export default AccountContainer;
