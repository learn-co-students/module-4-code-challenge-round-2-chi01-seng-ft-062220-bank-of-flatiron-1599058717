import React, { Component } from "react";
import AccountContainer from "./AccountContainer";
import "../stylesheets/App.css";


class App extends Component {

  constructor() {
    super()
    this.state = {
      allTrans: [],
      searchTerm: ""
    }
  }



  handleNewTrans = (e) => {
    e.preventDefault()

    const newTrans = {
      date: e.target["date"].value,
      description: e.target["description"].value,
      category: e.target["category"].value,
      amount: e.target["amount"].value
    }

    this.setState({
      allTrans: [...this.state.allTrans, newTrans]
    })

    const reqObj = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(newTrans)
    }

    fetch("http://localhost:6001/transactions", reqObj)
  }


  handleSearch = (e) => {
    console.log(e.target.value)

    //set searchTerm = to the value
    //set a conditional in TransactionList to check for serach term
    //if search term is not blank, filter transactions by description starting with search term into new array, and send that into AccountContainer instead
    
  }


  componentDidMount() {
    fetch("http://localhost:6001/transactions")
    .then(resp => resp.json())
    .then(transactions => {
      this.setState({
        allTrans: transactions
      })
    })
  }

  render() {
    return (
      <div className="ui raised segment">
        <div className="ui segment violet inverted">
          <h2>The Royal Bank of Flatiron</h2>
        </div>
        <AccountContainer transactions={this.state.allTrans} searchTerm={this.state.searchTerm} newTrans={this.handleNewTrans} handleSearch={this.handleSearch} />
      </div>
    );
  }
}

export default App;
