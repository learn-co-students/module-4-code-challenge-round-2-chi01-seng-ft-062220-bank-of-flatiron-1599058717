import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  state = {
      store: [],
      transactions: [],
      searching: ''
    }
  

  componentDidMount() {
    fetch("http://localhost:6001/transactions")
    .then(resp => resp.json())
    .then(results => this.setState({
      store: results,
      transactions: results
    }))
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
  
  handleChange = (e) => {
    const { store, searching } = this.state
    this.setEachQuery(e)
    
    const searchResults = store.filter(transaction => transaction.category.toLowerCase().includes(e.target.value) || transaction.description.toLowerCase().includes(e.target.value))
    this.setState({transactions: searchResults})
  }	  
  
  setEachQuery = (e) => {
    
    this.setState({searching: e.target.value.toLowerCase()})
  }
  
  render() {
    console.log()
    return (
      <div>
        <Search handleChange={this.handleChange}/>
        <AddTransactionForm />
        <TransactionsList transactions={this.state.transactions}/>
      </div>
    );
  }
}



export default AccountContainer;
