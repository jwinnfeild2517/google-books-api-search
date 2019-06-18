import React, { Component } from "react";

export default class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userSearch: null,
      error: null
    };
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  SubmitForm = event => {
    event.preventDefault();
    if (this.state.userSearch == null) {
      this.setState({ error: "Please enter a book or author to search" });
    } else {
      this.props.handleSubmit(this.state.userSearch);
    }
  };

  render() {
    return (
      <form className="searchBookForm" onSubmit={this.SubmitForm}>
        <label>
          <h1>Enter Book Information Here</h1>
        </label>
        <br />
        <input
          type="text"
          onChange={this.handleInputChange}
          id="searchField"
          name="userSearch"
          className="searchField"
        />
        <br />
        <input type="submit" className="mainPageButton" id="SubmitButton" />
      </form>
    );
  }
}
