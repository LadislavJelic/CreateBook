import React from "react";
import { useDispatch } from "react-redux";
import { addAnotherBookFunc } from "../actions/booksActions";

function AddAnotherBook() {
  const dispatch = useDispatch();
  return (
    <div className="add-another-book-wrapper">
      <div className="ok-sign"></div>
      <div className="description">Book added successfully</div>
      <div
        className="add-another-book"
        onClick={() => {
          dispatch(addAnotherBookFunc());
        }}
      >
        Add another book
      </div>
    </div>
  );
}

export default AddAnotherBook;
