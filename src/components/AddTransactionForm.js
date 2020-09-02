import React, { Component } from "react";

class AddTransactionForm extends Component {
constructor(){
  super()
  this.state = {
    date: '',
    description: '',
    category: '',
    amount: ''
  }
}

handleChange = (event) => {
  this.setState({
    [event.target.name]: event.target.value
  })
}

onFormSubmit = (event) => {
  event.preventDefault();
  const newTrans = {...this.state}
  this.props.addNewTransaction(newTrans)
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
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="inline fields">
            <input 
            type="date" 
            name="date" 
            value={this.state.date} 
            onChange={this.handleChange}
            />
            <input 
            type="text" 
            name="description" 
            placeholder="Description"
            value={this.state.description} 
            onChange={this.handleChange}
             />
            <input 
            type="text" 
            name="category" 
            placeholder="Category"
            value={this.state.category} 
            onChange={this.handleChange}
            />
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              value= {this.state.amount}
              onChange={this.handleChange}
            />
          </div>
          <button onClick={this.addNewTransaction} className="ui button" type="submit" >
            Add Transaction
          </button>
        </form>
      </div>
    );
  }
}

export default AddTransactionForm;
