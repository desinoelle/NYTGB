import React from "react";

function SaveBtn(props) {
  return (
    <span className="save-btn btn-danger" {...props} role="button" tabIndex="0">
      Save
    </span>
  );
}

export default SaveBtn;