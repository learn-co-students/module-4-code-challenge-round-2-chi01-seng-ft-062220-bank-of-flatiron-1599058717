import React, { Component } from 'react';

class Search extends Component {

  state={
    searchData :''
  }

  updateSearch = (event) => {
    this.setState({
      searchData : event.target.value
    })
    this.props.handleSearch(this.state.searchData)
  }

  render() {
    return (
      <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder={"Search your Recent Transactions"}
        value={this.state.searchData}
        onChange={this.updateSearch}
      />
      <i className="circular search link icon"></i>
    </div>
    );
  }
}

export default Search;

