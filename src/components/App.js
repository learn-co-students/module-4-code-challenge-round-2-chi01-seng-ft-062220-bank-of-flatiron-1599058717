import React, { Component } from "react";
import AccountContainer from "./AccountContainer";
import "../stylesheets/App.css";

class App extends Component {
  constructor(){
    super();
    this.state={
      transactions: [],
      searching: false, 
      filteredTransactions: []
    }
  }

  componentDidMount(){
    fetch(`http://localhost:6001/transactions`)
      .then(response => response.json())
        .then(allTransactions => {
          this.setState({
            transactions: allTransactions
          })
        })
  }

  handleSubmit = (newTransaction) =>{
    const reqObj = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newTransaction)
    }
    fetch('http://localhost:6001/transactions', reqObj)
      .then(response => response.json())
        .then(addedTransaction => {
          this.setState({
            transactions: [...this.state.transactions, addedTransaction]
          })
        })
  }

  searching = (info) => {
    if(info !== ''){
      let foundTransaction = this.state.transactions.filter(transaction => transaction.description.toLowerCase().includes(info))
      console.log(this.state.transactions.filter(transaction => transaction.description.toLowerCase().includes(info)))
      this.setState({
        ...this.state,
        searching: true,
        filteredTransactions: foundTransaction
      })
    } else if (info === ''){
      this.setState({
        ...this.state,
        searching: false,
        filteredTransactions: []
      })
    }
  }

  handleDelete=(event, id)=>{
    event.preventDefault()
    const reqObj = {
      method: 'DELETE'
    }
    fetch(`http://localhost:6001/transactions/${id}`, reqObj)
      .then(response => response.json())
        .then(removedTransaction => {
          this.setState({
            transactions: this.state.transactions.filter(transaction => transaction.id !== id)
          })
        })
  }

  handleSort = (event) =>{
    if (event === 'Category'){
      this.setState({
        transactions: this.state.transactions.sort(function(a, b){
          return b.category > a.category ? -1 : 1
        })
      })
    } else if (event === 'Description'){
      this.setState({
        transactions: this.state.transactions.sort(function(a, b){
          return b.description > a.description ? -1 : 1
        })
      })
    }
  }

  render() {
  console.log(this.state)
    return (
      <div className="ui raised segment">
        <div className="ui segment violet inverted">
          <h2>The Royal Bank of Flatiron</h2>
        </div>
        <AccountContainer handleSort={this.handleSort} filterTransactions={this.searching} newTransaction={this.handleSubmit} removeTransaction={this.handleDelete} transactions={this.state.searching ? this.state.filteredTransactions : this.state.transactions}/>
      </div>
    );
  }
}

export default App;
