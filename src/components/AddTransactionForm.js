import React, { Component } from "react";

class AddTransactionForm extends Component {
  //9. X  Setting state for the form
state = {
  date: "",
  description: "",
  cateogry: "",
  amount: ""
}
//10. X Writing a function that will handle change within the form
handleChange = (event) => {
  this.setState({
    [event.target.name]: event.target.value,
    
  });
  
};



  render() {
    return (
      <div className="ui segment">
      {/* 11. X Adding onSubmit event listener  */}
        <form onSubmit={() => this.props.handleSubmit(this.state)} className="ui form">
          <div className="inline fields">
            <input onChange={this.handleChange} type="date" name="date" />
            <input onChange={this.handleChange} type="text" name="description" placeholder="Description" />
            <input onChange={this.handleChange} type="text" name="category" placeholder="Category" />
            <input
              onChange={this.handleChange}
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
            />
          </div>
          {/* 12. adding the onChange testing in browser reveals
                  as I type it schanges the state EVEN THE DATE WOOHOO!*/}
          <button className="ui button" type="submit">
            Add Transaction
          </button>
        </form>
      </div>
    );
  }
}

export default AddTransactionForm;
