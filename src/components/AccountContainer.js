import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {


  render() {
    return (
      <div>
        <Search handleSearch={this.props.handleSearch} />
        <AddTransactionForm newTrans={this.props.newTrans} />
        <TransactionsList transactions={this.props.transactions} searchTerm={this.props.searchTerm} />
      </div>
    );
  }
}

export default AccountContainer;
