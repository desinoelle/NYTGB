import React, {Component} from "react";
import Header from "../components/Header";
import SearchArea from "../components/SearchArea";
import Book from "../components/Book";
import API from "../utils/API";

class Search extends Component {
  constructor(props) {
    super(props);
      this.state = {
        books: [],
        search: ""
      };
  }

  searchBooks() {
    API.search(this.state.search)
      .then(res => {
        this.setState({books: res.data.items});
      }).catch(err => {
        console.log(err);
      });
  }

  handleInputChange = event => {
      const value = event.target.value;
      const name = event.target.name;
      this.setState({
        [name]: value
      });
  };

  handleSearchSubmit = event => {
    event.preventDefault();
    this.searchBooks(this.state.search);
  };

  saveBook = event => {
    event.preventDefault();
     const newTitle = event.target.title;
     const newAuthors = event.target.authors;
     const newSynopsis = event.target.synopsis;
     const newImgsrc = event.target.imgsrc;

     API.saveBook({
      title: newTitle,
      authors: newAuthors,
      synopsis: newSynopsis,
      img: newImgsrc
    })
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  render() {

    return (
      <div className="container">
        <Header />
        <SearchArea 
          value={this.state.search}
          handleInputChange={this.handleInputChange}
          handleSearchSubmit={this.handleSearchSubmit}
        />
        {this.state.books.map(book => (
          <Book key={book.id}
                title={book.volumeInfo.title}
                authors={book.volumeInfo.authors}
                synopsis={book.volumeInfo.description}
                imgsrc={book.volumeInfo.imageLinks.smallThumbnail}
                saveBook={this.saveBook}
          />
        ))}
        
      </div>
    );
  }
}

export default Search;
