import React, { Component } from "react";

class AddTransactionForm extends Component {
  constructor() {
    super();
    this.state = {
      date: "",
      description: "",
      category: "",
      amount: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { postTransaction } = this.props;
    const newTransaction = this.state;
    postTransaction(newTransaction);
    this.setState({
      date: "",
      description: "",
      category: "",
      amount: "",
    });
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="inline fields">
            <input
              type="date"
              name="date"
              onChange={this.handleChange}
              value={this.state.date}
            />
            <input
              type="text"
              name="description"
              placeholder="Description"
              onChange={this.handleChange}
              value={this.state.description}
            />
            <input
              type="text"
              name="category"
              placeholder="Category"
              onChange={this.handleChange}
              value={this.state.category}
            />
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              onChange={this.handleChange}
              value={this.state.amount}
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
