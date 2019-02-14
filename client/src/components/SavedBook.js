import React from "react";

function SavedBook(props) {
    return (
        <div className="container">
            <h3>{props.title}</h3>
            <h4>{props.authors}</h4>
            <img src={props.imgsrc} alt={props.id} />
            <p>{props.synopsis}</p>
        </div>
    );
}
export default SavedBook;