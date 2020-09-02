import React, { Component } from "react";
import AccountContainer from "./AccountContainer";
import "../stylesheets/App.css";
const API = "http://localhost:6001/transactions";

class App extends Component {
  constructor() {
    super();
    this.state = {
      transactions: [],
    };
  }

  getTransactions = async () => {
    const res = await fetch(API);
    const transactions = await res.json();
    this.setState({
      transactions: [...transactions],
    });
  };

  postTransaction = async (newTransaction) => {
    const reqObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTransaction),
    };
    const res = await fetch(API, reqObj);
    const postedTransaction = await res.json();
    this.setState({
      transactions: [...this.state.transactions, postedTransaction],
    });
  };

  deleteTransaction = async (id) => {
    const reqObj = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await fetch(`${API}/${id}`, reqObj);
    if (res.status !== 404) {
      const updatedTransactions = this.state.transactions.filter(
        (transaction) => transaction.id !== id
      );
      this.setState({
        transactions: updatedTransactions,
      });
    }
  };

  componentDidMount() {
    this.getTransactions();
  }

  render() {
    return (
      <div className="ui raised segment">
        <div className="ui segment violet inverted">
          <h2>The Royal Bank of Flatiron</h2>
        </div>
        <AccountContainer
          transactions={this.state.transactions}
          postTransaction={this.postTransaction}
          deleteTransaction={this.deleteTransaction}
        />
      </div>
    );
  }
}

export default App;
