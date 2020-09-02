import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  state ={ 
    transactions: [],
    date: '',
    description: '',
    amount: '',
    search: ''
  }

  componentDidMount() {
    fetch('http://localhost:6001/transactions')
      .then(resp => resp.json())
      .then(data => {
        this.setState({ transactions: data });
      })
  }

  handleFormSubmission = () => {
    // e.preventDefault()
    fetch('http://localhost:6001/transactions', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        date: this.state.date,
        description: this.state.description,
        category: this.state.category,
        amount: this.state.amount
      })
    })
      .then(resp => resp.json())
      .then(data => {
        this.setState({ transactions: [...this.state.transactions, data] });
      })
    //console.log( e.target, "submit")
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  lookUp = (e) => {
    this.setState({ search: e.target.value })
    //console.log(e.target.value)
  }
  
  render() {
    const searchedTransaction = this.state.transactions.filter(transaction => 
      transaction.description.includes(this.state.search))
    //console.log(this.state)
    return (
      <div>
        <Search onChange={this.lookUp} />
        <AddTransactionForm handleFormSubmission={this.handleFormSubmission} handleChange={this.handleChange}/>
        <TransactionsList transactions={searchedTransaction} />
      </div>
    );
  }
}

export default AccountContainer;
