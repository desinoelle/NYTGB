import React, {Component} from "react";
import Header from "../components/Header";
import SavedBook from "../components/SavedBook";
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";

class Saved extends Component {
  constructor(props) {
    super(props);
      this.state = {
        books: []
      };
  }

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks() {
    API.getBooks()
      .then(res => this.setState({ books: res.data }))
      .catch(err => console.log(err));
  }

  deleteBook = key => {
    API.deleteBook(key)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="container">
        <Header />
        {this.state.books.map(book => (
          <div key={book._id} className="container border border-dark p-3 m-3">
          <SavedBook
              title={book.title}
              authors={book.authors}
              synopsis={book.synopsis}
              imgsrc={book.img}
          />
          <DeleteBtn onClick={() => this.deleteBook(book._id)} />
          </div>

          
        ))}
      </div>
    );
  }
}

export default Saved;
