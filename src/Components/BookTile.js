import React, { Component } from "react";

export default class BookTile extends Component {
  render() {
    return (
      <div>
        <img src="" alt="book image" className="book-image" />
        <h3>Book Name</h3>
        <p>
          <strong>Author:</strong>AuthorName
        </p>
        <p>description</p>
        <p>
          <strong>Average Rating:</strong> Rating
        </p>
        <button>
          <a href="">Preview</a>
        </button>
      </div>
    );
  }
}

// body.items[0].volumeInfo.imageLinks.thumbnail
// body.items[0].volumeInfo.title
//body.items[0].volumeInfo.authors (array)
//body.items[0].volumeInfo.description
//body.items[0].volumeInfo.averageRating
//body.items[0].volumeInfo.infoLink
