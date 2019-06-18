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
        let booksList = body.items;
        this.setState({ books: booksList });
        debugger;
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  };

  render() {
    let bookList = [];
    if (this.state.books != null) {
      bookList = this.state.books.map(book => {
        let authors = "";
        let image =
          book.volumeInfo.imageLinks === undefined
            ? "https://media.istockphoto.com/photos/books-picture-id949118068?k=6&m=949118068&s=612x612&w=0&h=JQ8TsVv0Bx36l1KwwhOaAz564l8MIDSRFebHbLqGjIA="
            : `${book.volumeInfo.imageLinks.thumbnail}`;

        let authorsArray =
          book.volumeInfo.authors === undefined
            ? ["unknown"]
            : book.volumeInfo.authors;
        authorsArray.forEach(name => {
          if (name !== authorsArray[authorsArray.length - 1]) {
            return (authors += name + ", ");
          } else {
            return (authors += name);
          }
        });

        if (!bookList.includes(book)) {
          return (
            <BookTile
              key={book.id}
              image={image}
              title={book.volumeInfo.title}
              author={authors}
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
