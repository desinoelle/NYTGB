import React from "react";

function Book(props) {
    return (
        <div className="container border border-dark p-3 m-3">
            <h3>{props.title}</h3>
            <h4>{props.authors}</h4>
            <img src={props.imgsrc} alt={props.id} />
            <p>{props.synopsis}</p>
            <div className="row">
              <button id={props.id} type="button" className="btn btn-primary ml-3">View</button>
              <button title={props.title} authors={props.authors} synopsis={props.synopsis} id={props.id} 
                        onClick={props.saveBook} className="btn btn-danger ml=3">Save</button>
            </div>
        </div>
    );
}
export default Book;
