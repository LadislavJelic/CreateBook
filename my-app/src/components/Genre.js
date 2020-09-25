import React, { useState, useEffect } from "react";
import { fetchData } from "../actions/booksActions";
import { useSelector, useDispatch } from "react-redux";
import {
  setGenreFunc,
  setStepFunc,
  setGenreNameFunc,
} from "../actions/booksActions";

function Genre() {
  const data = useSelector((state) => state.books);
  const { genres, step, newBook } = data;
  const { genre } = newBook;
  const dispatch = useDispatch();
  let [active, setActive] = useState("");
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  return (
    <div className="main-wrapper-genre">
      <div className="genre-options">
        {genres.map((el, ind, arr) => (
          <div
            className={`genre ${
              active === el.id || genre === el.name ? "active" : ""
            }`}
            key={ind}
            onClick={() => {
              setActive(el.id);
              dispatch(setGenreFunc(el));
              dispatch(setGenreNameFunc(el));
            }}
          >
            {el.name}
          </div>
        ))}
      </div>
      <div className="buttons">
        <div className="button button-back">Back</div>
        {genre ? (
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

export default Genre;
