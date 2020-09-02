import React, { Component } from "react";

class AddTransactionForm extends Component {
  state={
    date: '',
    description: '',
    category: '',
    amount: ''
  }

  handleInput = (event) =>{
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  newTransaction = (event) =>{
    event.preventDefault()
    let newTransaction = this.state
    this.props.newTransaction(newTransaction)
    this.setState({
      date: '',
      description: '',
      category: '',
      amount: ''
    })
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.newTransaction}>
          <div className="inline fields">
            <input type="date" name="date" onChange={this.handleInput} value={this.state.date} />
            <input type="text" name="description" onChange={this.handleInput} value={this.state.description} placeholder="Description" />
            <input type="text" name="category" onChange={this.handleInput} value={this.state.category} placeholder="Category" />
            <input
              type="number"
              name="amount"
              onChange={this.handleInput} 
              value={this.state.amount}
              placeholder="Amount"
              step="0.01"
            />
          </div>
          <button className="ui button" type="submit">
            Add Transaction
          </button>
        </form>
      </div>
    );
  }
}

export default AddTransactionForm;
