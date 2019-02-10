import React, {Component} from "react";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import API from "../utils/API";

class Search extends Component {
  constructor(props) {
    super(props);
      this.state = {
        books: [],
        search: ""
      };
  }

  componentDidMount() {
    this.searchBooks();
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

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchBooks(this.state.search);
  };

  render() {
    return (
      <Container>
        <div className="jumbotron text-center">
          <h1>(React) Google Books Search</h1>
          <h3>Search for and Save Books of Interest</h3>
        </div>
        <SearchForm
          value={this.state.search}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />
        <SearchResults books={this.state.books} />
      </Container>
    );
  }
}

export default Search;
