import React, { Component } from "react";

class AddTransactionForm extends Component {
  state = {
    date: '',
    description: '',
    category: '',
    amount: ''
  }

  handleInput = (e) =>{
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  newTrans = (e) => {
    // e.preventDefault()  
    let newTrans = this.state
    this.props.newTrans(newTrans)
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
        <form className="ui form" onSubmit={this.newTrans}>
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
  