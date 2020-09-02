import React, { Component } from "react";

class AddTransactionForm extends Component {

  state = {
    date: '',
    description: '',
    category: '',
    amount: ''
  }


  handleSubmit = (e) =>{
     e.preventDefault()
     const newTrans = { 
         ...this.state
     }
     const reqObj = {
         method: 'POST',
         headers: {
             'Content-Type': 'application/json'
         },
           body: JSON.stringify(newTrans)
         }

         fetch('http://localhost:6001/transactions', reqObj)
         .then(resp => resp.json())
         .then(newTrans => {
           this.props.addTrans(newTrans)
     })
  }


  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.handleSubmit} className="ui form">
          <div className="inline fields">
            <input onChange={this.handleChange} value={this.state.date} type="date" name="date" />
            <input onChange={this.handleChange} value={this.state.description} type="text" name="description" placeholder="Description" />
            <input onChange={this.handleChange} value={this.state.category} type="text" name="category" placeholder="Category" />
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
