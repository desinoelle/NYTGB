import React, {Component} from "react";
import Container from "../components/Container";
import API from "../utils/API";

class Saved extends Component {
  // Setting our component's initial state
  state = {
    books: [],
    title: "",
    author: "",
    synopsis: ""
  };

  componentDidMount() {
    this.loadBooks();
  }

  // Loads all books
  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, title: "", author: "", synopsis: "" })
      )
      .catch(err => console.log(err));
  };

  // Deletes a book
  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  render() {
     return (
      <Container>
        <div className="jumbotron text-center">
          <h1>(React) Google Books Search</h1>
          <h3>Search for and Save Books of Interest</h3>
        </div>
        <div className="row">
          <div className="col">
            <h1>Saved Books</h1>
            {this.state.books.length ? (
              <ul>
                {this.state.books.map(book => {
                  return (
                    <li key={book._id}>
                      <a href={"/books/" + book._id}>
                        <strong>
                          {book.title} by {book.author}
                        </strong>
                      </a>
                      <button onClick={() => this.deleteBook(book._id)}>Delete Book</button>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </div>
        </div>
      </Container>
    );
  }
}

export default Saved;
