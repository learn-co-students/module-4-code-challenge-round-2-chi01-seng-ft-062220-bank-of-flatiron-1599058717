import React, { Component } from "react";

class AddTransactionForm extends Component {

  state= {
    date: '',
    description: '',
    category: '',
    amount: ''
  }

  changeListener = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  submitAndReset = () => {
    this.props.handleFormSubmit(this.state)
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
        <div className="ui form">
          <div className="inline fields">
            <input type="date" name="date" value={this.state.date} onChange={this.changeListener} />
            <input type="text" name="description" value={this.state.description} placeholder="Description" onChange={this.changeListener} />
            <input type="text" name="category" value={this.state.category} placeholder="Category" onChange={this.changeListener}/>
            <input value={this.state.amount} onChange={this.changeListener}
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
            />
          </div>
          <button className="ui button" onClick={() => this.submitAndReset()}>
            Add Transaction
          </button>
        </div>
      </div>
    );
  }
}

export default AddTransactionForm;
