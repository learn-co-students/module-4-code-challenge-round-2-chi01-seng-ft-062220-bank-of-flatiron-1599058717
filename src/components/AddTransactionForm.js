import React, { Component } from "react";

const API = "http://localhost:6001/transactions"

class AddTransactionForm extends Component {
  constructor(){
    super();
    this.state = {
      date:"",
      description: "",
      category: "",
      amount: ""
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    }

    fetch(API, payload)
    .then(resp => resp.json())
    .then(transaction => {
      this.props.addTransaction(transaction)
    })
    
    this.setState({
        date:"",
        description: "",
        category: "",
        amount: ""
    })
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="inline fields">
            <input onChange={this.handleChange} value={this.state.date} type="date" name="date" />
            <input onChange={this.handleChange} value={this.state.description} type="text" name="description" placeholder="Description" />
            <input onChange={this.handleChange} value={this.state.category}type="text" name="category" placeholder="Category" />
            <input
              onChange={this.handleChange}
              value={this.state.amount}
              type="number"
              name="amount"
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
