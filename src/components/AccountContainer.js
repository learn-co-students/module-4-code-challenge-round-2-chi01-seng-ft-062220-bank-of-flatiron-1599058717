import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredTransactions: [],
    };
  }

  filterTransactions = (query) => {
    const { transactions } = this.props;
    let filteredTransactions = transactions.filter((transaction) =>
      transaction.description.toLowerCase().includes(query.toLowerCase())
    );
    if (query.length > 0 && filteredTransactions.length === 0) {
      filteredTransactions = [
        {
          id: 0,
          category: "",
          description: "No matches",
          amount: "",
        },
      ];
    }
    this.setState({
      filteredTransactions: filteredTransactions,
    });
  };

  render() {
    const { transactions, postTransaction } = this.props;
    return (
      <div>
        <Search filterTransactions={this.filterTransactions} />
        <AddTransactionForm postTransaction={postTransaction} />
        <TransactionsList
          transactions={
            this.state.filteredTransactions.length > 0
              ? this.state.filteredTransactions
              : transactions
          }
        />
      </div>
    );
  }
}

export default AccountContainer;
