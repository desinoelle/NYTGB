import React from "react";

function DeleteBtn(props) {
  return (
    <span className="delete-btn" {...props} role="button" tabIndex="0">
      <button className="btn btn-danger ml=3">Delete</button>
    </span>
  );
}

export default DeleteBtn;
