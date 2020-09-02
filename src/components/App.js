import React, { Component } from "react";
import AccountContainer from "./AccountContainer";
import "../stylesheets/App.css";

class App extends Component {

  state={
    allTransactions : []
    }

  getReq = () => {
    fetch('http://localhost:6001/transactions')
      .then(resp => resp.json())
      .then(transactions => {
        this.setState({
          allTransactions : transactions
        })
      })
  }

  componentDidMount(){
    this.getReq()
  }

  handleFormSubmit = (formState) => {
    const newTransaction = {
      date: formState.date,
      description: formState.description, 
      category: formState.category, 
      amount: formState.amount
    }

    const reqObj = {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(newTransaction)
    }

    fetch('http://localhost:6001/transactions', reqObj)
      .then(resp => resp.json())
      .then(newTrans => {
        this.getReq()
      })    
  }

  handleSearch = (searchData) => {
    if(searchData.length === 0){
      this.getReq()
    }
    const filteredTransactions = this.state.allTransactions.filter(trans => trans.description.toLowerCase().includes(searchData.toLowerCase())) 
    this.setState({
      allTransactions : filteredTransactions
    })
  }

  handleDelete = (id) => {
    const reqObj = {
      method: 'DELETE'
    }
    fetch(`http://localhost:6001/transactions/${id}`, reqObj)
      .then(resp => resp.json())
      .then(data => {
        alert('Doctoring your financial history is a crime. please re-add this transaction. The "add transaction form" works great')
        this.getReq()
      })
  }

  handleSort = (type) => {
    if(type === 'cat'){
      this.setState({
        allTransactions : this.state.allTransactions.sort((a, b) => (a.category > b.category) ? 1 : -1)
      })

    } else if (type === 'des'){
      this.setState({
        allTransactions : this.state.allTransactions.sort((a, b) => (a.description > b.description) ? 1 : -1)
      })
    }
  }

  render() {
    return (
      <div className="ui raised segment">
        <div className="ui segment violet inverted">
          <h2>The Royal Bank of Flatiron</h2>
        </div>
        <button onClick={() => this.handleSort('cat')}> SORT ALPHA BY CATEGORY</button>
        <button onClick={() => this.handleSort('des')}> SORT ALPHA BY DESCRIPTION</button>
        <button onClick={() => this.getReq()}> DEFAULT SORT (Date)</button>
        <AccountContainer allTransactions={this.state.allTransactions} 
                          handleFormSubmit={this.handleFormSubmit} 
                          handleSearch={this.handleSearch}
                          handleDelete={this.handleDelete}
                          />
      </div>
    );
  }
}

export default App;
