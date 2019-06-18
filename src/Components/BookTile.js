import React, { Component } from "react";

export default class BookTile extends Component {
  render() {
    return (
      <div className="bookTile">
        <img src={this.props.image} alt="book" className="book-image" />
        <h3>{this.props.title}</h3>
        <p>
          <strong>Author(s): </strong>
          {this.props.author}
        </p>
        <p>{this.props.description}</p>
        <p>
          <strong>Average Rating: </strong> {this.props.rating}
        </p>
        <button>
          <a href={this.props.link}>Preview</a>
        </button>
      </div>
    );
  }
}
