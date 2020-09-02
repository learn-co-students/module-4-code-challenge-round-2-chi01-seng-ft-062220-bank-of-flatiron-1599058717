import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  constructor() {
    super()	  
    this.state = {
      store: [],
      transactions: [],
      searching: ''}
  }

  componentDidMount() {
    fetch("http://localhost:6001/transactions")
    .then(resp => resp.json())
    .then(results => this.setState({
      store: results,
      transactions: results
    }))
  }	 
  
  handleChange = (e) => {
    const { store, searching } = this.state
    this.setEachQuery(e)

    const searchResults = store.filter(transaction => transaction.category.toLowerCase().includes(searching) || transaction.description.toLowerCase().includes(searching))
    this.setState({transactions: searchResults})
  }	  

  setEachQuery = (e) => {
    this.setState({searching: e.target.value.toLowerCase()})
  }
  
  render() {
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
