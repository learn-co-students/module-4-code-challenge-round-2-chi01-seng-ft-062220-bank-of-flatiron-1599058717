import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  state = { 
    transactions: [],
    searchTerm: ''
  }


  componentDidMount() {
    fetch('http://localhost:6001/transactions')
    .then(resp => resp.json())
    .then((transArr) => {
     this.setState({
        transactions: transArr
     })
    })
  }
  
  addTrans = (newTrans) => {
    this.setState({
      transactions: [...this.state.transactions, newTrans]
    })
  }


  handleSearchChange = event => {
    this.setState({ searchTerm: event.target.value })
  }


  render() {
    // const searchTrans = this.state.transaction.filter(t => t.description.includes(this.state.searchTerm))
    
    return (
      <div>
        <Search onChange={this.handleSearchChange}/>
        <AddTransactionForm addTrans={this.addTrans}/>
        <TransactionsList transactions={this.state.transactions}/>
      </div>
    );
  }
}

export default AccountContainer;
