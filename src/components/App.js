import React, { Component } from "react";
import AccountContainer from "./AccountContainer";
import "../stylesheets/App.css";


const API = "http://localhost:6001/transactions"

class App extends Component {
  constructor(){
    super();
    this.state = {
      transactions: []
    }
  }


  componentDidMount(){
    fetch(API)
    .then(resp => resp.json())
    .then(transactions => {
      console.log(transactions);
      this.setState({
        transactions: transactions,
        inputValue: ''
      });
    })
  }

  addTransaction = (transaction) => {
    this.setState({
      transactions: [...this.state.transactions, transaction]
    })
  }

  searchTransaction = (e) => {
    let filteredTransactions = this.state.transactions.filter(transaction => {
      return transaction.description.toLowerCase().includes(this.state.inputValue.toLowerCase())
    })
    this.setState({
     inputValue: e.target.value,
     transactions: filteredTransactions
   })
  }

  render() {

  

    return (
      <div className="ui raised segment">
        <div className="ui segment violet inverted">
          <h2>The Royal Bank of Flatiron</h2>
        </div>
        <AccountContainer  searchTransaction={this.searchTransaction} addTransaction={this.addTransaction} transactions={this.state.transactions} />
      </div>
    );
  }
}

export default App;
