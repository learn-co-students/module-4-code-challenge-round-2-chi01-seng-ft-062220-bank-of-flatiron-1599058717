import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  render() {
    return (
      <div>
        <Search 
          handleSearch={this.props.handleSearch} 
          />
        <AddTransactionForm 
          state={this.props.state} 
          addTransactionClick={this.props.addTransactionClick} 
          handleInput={this.props.handleInput} 
          />
        <TransactionsList 
        renderTransactions={() => this.props.renderTransactions(this.props.transactions)} 
        transactions={this.props.transactions}
        />
      </div>
    );
  }
}

export default AccountContainer;
