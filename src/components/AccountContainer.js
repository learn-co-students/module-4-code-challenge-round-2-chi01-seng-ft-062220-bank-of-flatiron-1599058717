import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";
// Core Deliverables
// As a user, I should be able to:
// 1. X See a table of the transactions.
// 2. X Fill out and submit the form to add a new transaction. 
//    X This should add the new transaction to the table as well 
//    X as post the new transaction to the backend API for persistence.
// 3. X Filter transactions by typing into the search bar. Only 
//    X transactions with a description matching the search 
//    X term should be shown in the transactions table.



class AccountContainer extends Component {
  //1. X  Set state up to hold all the account objects
  state = {
    transactions: [],
    //16. X Setting a search state to a Parent component
    search: ""
  }

  //2.    X Fetch the transactions and set them as state
  //3.    X Check in the browsers state for state

  componentDidMount() {
    fetch('http://localhost:6001/transactions')
    .then((response) => {
       response.json().then((data) => {
         this.setState({transactions: data})
       })
    })
  }

  //14. X Writing out the handling of submit
  
  handleSubmit = (newTransaction) => {
    fetch('http://localhost:6001/transactions', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        ...newTransaction,
        transactions: {
          date: newTransaction.date,
          description: newTransaction.description,
          category: newTransaction.category,
          amount: newTransaction.amount
        }
      })
    })
    .then(resp => resp.json())
    .then(data => this.setState(prev => ({
      transactions: [
        ...prev.transactions,
        data
      ]
    })))
  }
//15. X Posting successful, persisting, good checkpoint


//17. X   drafting the methods that withh be 
//        responsible for searching and filtering
handleSearch = (event) => {
  this.setState({search: event.target.value})
}

filteredTransaction = () => {
  let filteredTransaction = this.state.transactions.filter(transaction => transaction.description.includes(this.state.search));

  return filteredTransaction;
}



  render() {
    //4.  X Deconstruct this.state into just transactions
    
    //let { transactions } = this.state

    // 20. comment out the deconstructor because no longer neccessary.

    //console.log(transactions)
    return (
      <div>
      {/* 18. X Passing down the handleSearch */}
        <Search handleSearch={this.handleSearch}/>
        {/* 13. X Giving the handleSubmit functionality to form */}
        <AddTransactionForm handleSubmit={this.handleSubmit}/>
        {/* 5. X  passing down props to Transaction List to eventually render */}
        {/* 19. X Changing transactions={transactions} to 
                   transactions={this.filteredTransaction()}
                   because we now want to dsiplay either all of them
                   or only filtered ones*/}
        <TransactionsList transactions={this.filteredTransaction()}/>
      </div>
    );
  }
}

export default AccountContainer;
