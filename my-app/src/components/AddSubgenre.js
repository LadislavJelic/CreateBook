import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setStepFunc,
  setAddSubGenreNameFunc,
  addDescriptionRequireFunc,
  setFourStepsActive,
  setForStepsFunc,
} from "../actions/booksActions";

function AddSubgenre(props) {
  const data = useSelector((state) => state.books);
  const { step, descriptionRequireBool } = data;
  let [subGenre, setSubGenre] = useState(data.newBook.subGenre);
  let [descriptionRequire, setDescriptionRequire] = useState(
    descriptionRequireBool ? descriptionRequireBool : false
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (subGenre.length > 0) {
      dispatch(setAddSubGenreNameFunc(subGenre));
      dispatch(setFourStepsActive());
    } else {
      dispatch(setAddSubGenreNameFunc(""));
      dispatch(setForStepsFunc(""));
    }
    dispatch(addDescriptionRequireFunc(descriptionRequire));
  }, [dispatch, subGenre, descriptionRequire]);
  return (
    <div className="AddSubgenre">
      <div>
        <input
          type="text"
          placeholder="Subgenre name"
          value={subGenre}
          onChange={(e) => setSubGenre(e.target.value)}
        />
      </div>
      <div className="wrapper-checkbox-label">
        <input
          type="checkbox"
          id="description-required"
          checked={descriptionRequire}
          onChange={(e) => setDescriptionRequire(e.target.checked)}
        />
        <label htmlFor="description-required">
          Description is required for this subgenre
        </label>
      </div>
      <div className="buttons">
        <div
          onClick={() => dispatch(setStepFunc(step - 1))}
          className="button button-back"
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

export default AddSubgenre;
