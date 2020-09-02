import React, { Component } from "react";
import AccountContainer from "./AccountContainer";
import "../stylesheets/App.css";
import Transaction from "./Transaction"

class App extends Component {
  constructor(){
    super()
    this.state = {
      transactions: [],
      date: '',
      description: '',
      category: '',
      amount: '',
      search: ''
    }
  }

  componentDidMount(){
    fetch('http://localhost:6001/transactions')
    .then(resp => resp.json())
    .then(transactionsArr => {
     this.setState({
       transactions: transactionsArr
      })
    })
  }

  renderTransactions = (transArr) => {
    return transArr.map(transObj => {
      return <Transaction transaction={transObj} />
    }).reverse()
  }

  handleInput = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  addTransactionClick = (e) => {
    e.preventDefault()
    const reqObj = {
       method: 'POST',
       headers: {
           'Content-Type': 'application/json'
       },
       body: JSON.stringify({
         date: this.state.date,
         description: this.state.description,
         category: this.state.category,
         amount: this.state.amount,
       })
    }
     
    fetch('http://localhost:6001/transactions', reqObj)
    .then(resp => resp.json())
    .then(transaction => {
       this.setState({
         transactions: [...this.state.transactions, transaction],
         filteredTransactions: [],
         date: '',
         description: '',
         category: '',
         amount: '',
       })
    })
  }

  handleSearch = (event) => {
    console.log(event.target.value)
    const filteredTransactions = this.state.transactions.filter(transaction => transaction.description.toLowerCase().includes(event.target.value))
    this.setState({transactions: filteredTransactions})
  //idk how to get this to search if you backspace, you have to refresh for the full list again
  }

  render() {
    return (
      <div className="ui raised segment">
        <div className="ui segment violet inverted">
          <h2>The Royal Bank of Flatiron</h2>
        </div>
        <AccountContainer 
          searchVal={this.state.search}
          handleSearch={this.handleSearch} 
          state={this.state} 
          addTransactionClick={this.addTransactionClick} 
          handleInput={this.handleInput} 
          renderTransactions={() => this.renderTransactions(this.state.transactions)} 
          transactions={this.state.transactions} 
          />
      </div>
    );
  }
}

export default App;
