import React, { Component } from "react";
import AccountContainer from "./AccountContainer";
import "../stylesheets/App.css";

class App extends Component {
  constructor(){
    super()
    this.state= {
      transactions: []
    }
  }
  
  componentDidMount() {
    fetch('http://localhost:3000/transactions')
    .then(res => res.json())
    .then(transactions =>
      this.setState({
        transactions: transactions
      })
    )
  }
  /*
  tried to squeeze in a delete but couldn't figure out how to pass it through to Transaction.js from 
  TransactionsList.js
  removeTransaction = (id) => {
    const changedTransactions = this.state.transactions.filter((item) => item.id !== id);
    this.setState({
      transactions: changedTransactions
    })
  }

  handleDelete = (id) => {
    fetch('http://localhost:3000/transactions' + id, { method: 'DELETE'})
    .then(resp => resp.json())
    this.removeTransaction(id)
  }
*/
  handleInput = (e) => {
    this.setState({
      filterTerm: e.target.value
    })
  }

  searchEngine = () => {
    if (this.state.filterTerm){
      return this.state.transactions.filter(transaction =>
        transaction.description.toLowerCase().includes(this.state.filterTerm) || transaction.description.includes(this.state.filterTerm))
    } else {
      return this.state.transactions
    }
  }
  

 addNewTransaction = (e) => {
   const recObj = {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(e)
  }
  fetch('http://localhost:6001/transactions', recObj) 
  .then(resp => resp.json())
  .then(newTransaction => {
    this.setState({
      transactions: [...this.state.transactions, newTransaction]
      })
    })
  
  }
  
  render() {
    return (
      <div className="ui raised segment">
        <div className="ui segment violet inverted">
          <h2>The Royal Bank of Flatiron</h2>
        </div>
        <AccountContainer 
        addNewTransaction={this.addNewTransaction}
        handleInput={this.handleInput}
        transactions={this.searchEngine()}
        />
      </div>
    );
  }
}

export default App;
