import React, { Component } from "react";
import SearchForm from "../Components/SearchForm";
import BookTile from "../Components/BookTile";

export default class SearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }

  handleSubmit = formpayLoad => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${formpayLoad}`)
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
          throw error;
        }
      })
      .then(response => response.json())
      .then(body => {
        debugger;
        let booksList = body.items;
        this.setState({ books: booksList });
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  };

  render() {
    let bookList = this.state.books.map(book => {
        let authors = ""
        book.volumeInfo.authors.forEach(name => { return authors += name + " ," })

      return (
        <BookTile
          key={book.id}
          image={book.volumeInfo.imageLinks.thumbnail}
          author={authors}
          description={book.volumeInfo.description}
          rating={book.volumeInfo.averageRating}
          link={book.volumeInfo.infoLink}
        />
      );
    });

    return (
      <div className="SearchContainer">
        <div>
        <SearchForm handleSubmit={this.handleSubmit} />
        <div>
            {bookList}
        </div>
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
