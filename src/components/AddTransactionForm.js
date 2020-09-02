import React, { Component } from "react";

class AddTransactionForm extends Component {
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.props.handleSubmit}>
          <div className="inline fields">
            <input type="date" 
                    name="date" 
                    value={this.props.dateInput} 
                    onChange={this.props.handleteInput}/>
            <input type="text" 
                    name="description" 
                    value={this.props.descriptionInput} 
                    onChange={this.props.handleDescriptionInput} 
                    placeholder="Description" />
            <input type="text" 
                    name="category" 
                    value={this.props.categorytInput} 
                    onChange={this.props.handleCategoryInput} 
                    placeholder="Category" />
            <input
                    type="number" name="amount"
                    value={this.props.amountInput}
                    onChange={this.props.handleAmountInput}
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
