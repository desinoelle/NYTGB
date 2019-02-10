import React, {Component}from "react";
import Container from "../Container";
import "./style.css";

class SearchResults extends Component {
  render() {
    let bookInfo;
    if (this.props.books) {
      bookInfo = this.props.books.map(book => {
        let id = book.id;
        let title = book.volumeInfo.title;
        let authors = book.volumeInfo.authors;
        let description = book.volumeInfo.description;
        return (
        <Container className="border border-dark p-3 m-3">
            <h3>{title}</h3>
            <h4>{authors}</h4>
            <p>{description}</p>
            <div className="row">
              <button onClick={} id={id} type="button" className="btn btn-primary ml-3">View</button>
              <button onClick={} id={id} type="button" className="btn btn-danger ml-3">Save</button>
            </div>
        </Container>
        );
      });
    }
    return (
      <Container>
        {bookInfo}
      </Container>
    );
  }
}
export default SearchResults;
