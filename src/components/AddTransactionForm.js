import React, { Component } from "react";

class AddTransactionForm extends Component {
  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="inline fields">
            <input 
              value={this.props.state.date} 
              onChange={this.props.handleInput} 
              type="date" 
              name="date" 
              />
            <input 
              value={this.props.state.descripton} 
              onChange={this.props.handleInput} 
              type="text" 
              name="description" 
              placeholder="Description" 
              />
            <input 
              value={this.props.state.category} 
              onChange={this.props.handleInput} 
              type="text" name="category" 
              placeholder="Category" 
            />
            <input
              value={this.props.state.amount}
              onChange={this.props.handleInput}
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
            />
          </div>
          <button onClick={this.props.addTransactionClick} className="ui button" type="submit">
            Add Transaction
          </button>
        </form>
      </div>
    );
  }
}

export default AddTransactionForm;
