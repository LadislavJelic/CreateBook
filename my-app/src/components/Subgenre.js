import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setSubGenreFunc,
  setStepFunc,
  addNewStepFunc,
  setSubGenreNameFunc,
} from "../actions/booksActions";

function Subgenre(props) {
  const data = useSelector((state) => state.books);
  const { step, newBook } = data;
  const { subGenre } = newBook;
  const subgenres = data.subgenresOptions.subgenres;
  const dispatch = useDispatch();
  const [active, setActive] = useState("");
  return (
    <div className="main-wrapper-subgenre">
      <div className="subgenre-options">
        {subgenres.map((el, ind, arr) => (
          <div
            className={`genre ${
              active === el.id || subGenre === el.name ? "active" : ""
            }`}
            key={ind}
            onClick={() => {
              setActive(el.id);
              dispatch(setSubGenreFunc(el));
              dispatch(setSubGenreNameFunc(el));
            }}
          >
            {el.name}
          </div>
        ))}
        <div
          className="genre dark"
          onClick={() => {
            dispatch(addNewStepFunc(step + 1));
          }}
        >
          Add new
        </div>
      </div>
      <div className="buttons">
        <div
          onClick={() => dispatch(setStepFunc(step - 1))}
          className="button button-back active"
        >
          Back
        </div>
        {subGenre ? (
          <div
            onClick={() => dispatch(setStepFunc(step + 1))}
            className="button dark active"
          >
            Next
          </div>
        ) : (
          <div className="button dark">Next</div>
        )}
      </div>
    </div>
  );
}

export default Subgenre;
