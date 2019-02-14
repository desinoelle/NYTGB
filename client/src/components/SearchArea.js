import React from "react";

function SearchArea(props) {
  return (
    <form>
      <div className="form-group">
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control"
          placeholder="Enter a book name"
          id="search"
        />
        <br />
        <button onClick={props.handleSearchSubmit} className="btn btn-danger">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchArea;
