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
        // ;
        let booksList = body.items;
        this.setState({ books: booksList });
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  };

  render() {
    let bookList = [];
    if (this.state.books != null) {
      bookList = this.state.books.map(book => {
        let authors = "";
        let description = book.searchInfo["textSnippet"];
        let authorsArray = book.volumeInfo.authors;
        authorsArray.forEach(name => {
          if (name != authorsArray[authorsArray.length - 1]) {
            return (authors += name + ", ");
          } else {
            return (authors += name);
          }
        });
        if (!bookList.includes(book)) {
          return (
            <BookTile
              key={book.id}
              image={book.volumeInfo.imageLinks}
              title={book.volumeInfo.title}
              author={authors}
              description={description}
              rating={book.volumeInfo.averageRating}
              link={book.volumeInfo.infoLink}
            />
          );
        }
      });
    }

    return (
      <div className="SearchContainer">
        <div className="jumboTron">
          <SearchForm handleSubmit={this.handleSubmit} />
        </div>
        <div className="bookList">{bookList}</div>
      </div>
    );
  }
}
