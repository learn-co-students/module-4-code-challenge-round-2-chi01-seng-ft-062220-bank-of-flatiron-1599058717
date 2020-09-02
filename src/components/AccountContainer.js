import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  constructor () {
    super()
    this.state = {
      transactions: [],
      dateInput: "",
      descriptionInput: "",
      categoryInput: "",
      amountInput: "",
      searchInput: ""
    }
  }
  
  
  componentDidMount() {
    fetch('http://localhost:6001/transactions')
    .then(res => res.json())
    .then(transactions => 
      this.setState({transactions: transactions})
    )
  }
  
//form handlers
  handleDateInput = (e) => {
    this.setState({dateInput: e.target.value})
  }

  handleDescriptionInput = (e) => {
    this.setState({descriptionInput: e.target.value})
  }

  handleCategoryInput = (e) => {
    this.setState({categoryInput: e.target.value})
  }

  handleAmountInput = (e) => {
    this.setState({amountInput: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:6001/transactions', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        date: this.state.dateInput,
        description: this.state.descriptionInput,
        category: this.state.categoryInput,
        amount: this.state.amountInput,
      })
    })
    .then(response => response.json())
    .then(transaction => {
      this.setState({
        transactions: [...this.state.transactions, transaction]
      })
    })
    //this.setState({nameInput: ""})
  }
  
  

 //searchbar (not functioning)

  handleSearch = (e) => {
    this.setState({searchInput: e.target.value})

  }

  findTransaction = (e) => {
    if (this.state.searchInput) {
      return this.state.transactions.filter((transaction) =>
        transaction.description.include(this.state.searchInput)
      )
    } 
  }



  render() {
    return (
      <div>
        <Search 
            handleSearch={this.handleSearch} 
            findTransaction={this.findTransaction}
            searchInput={this.state.searchInput}/>
        <AddTransactionForm 
            handleDateInput={this.handleDateInput}
            handleDescriptionInput={this.handleDescriptionInput}
            handleCategoryInput={this.handleCategoryInput}
            handleAmountInput={this.handleAmountInput}
            handleSubmit={this.handleSubmit}/>
        <TransactionsList 
            transactions={this.state.transactions} 
            findTransaction={this.findTransaction()}
            searchInput={this.state.searchInput}/>
      </div>
    );
  }
}

export default AccountContainer;
