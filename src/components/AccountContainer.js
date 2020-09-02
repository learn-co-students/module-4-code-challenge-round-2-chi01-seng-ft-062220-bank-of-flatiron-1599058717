import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  render() {
    return (
      <div>
        <Search handleInput={this.props.handleInput}/>
        <AddTransactionForm 
        addNewTransaction={this.props.addNewTransaction}
        />
        <TransactionsList 
        transactions={this.props.transactions}
        handleDelete={this.props.handleDelete} 
        removeTransaction={this.props.removeTransaction}
        />
      </div>
    );
  }
}

export default AccountContainer;
