import React, { Component } from "react";

export default class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userSearch: null
    };
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <form className="searchBookForm">
        <label>Enter Book Information Here</label>
        <input
          type="text"
          onChange={this.handleInputChange}
          id="searchField"
          name="userSearch"
        />
        <input type="submit" id="SubmitButton" />
      </form>
    );
  }
}
