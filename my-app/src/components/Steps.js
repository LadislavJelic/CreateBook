import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setStepFunc } from "../actions/booksActions";

function Steps() {
  const data = useSelector((state) => state.books);
  const { step, steps, newBook } = data;
  const { subGenre } = newBook;
  const dispatch = useDispatch();

  if ((step === 1 || step === 2) && !subGenre) {
    return (
      <div className="steps">
        {steps.slice(0, 2).map((el, ind, arr) =>
          el.active ? (
            <div
              onClick={() => dispatch(setStepFunc(el.number))}
              key={ind}
              className={`step ${step === el.number ? "active" : ""}`}
            >
              {el.number}
              <div>
                {el.number === 1 && <div className="name-of-step">Gender</div>}
              </div>
              <div>
                {el.number === 2 && (
                  <div className="name-of-step">Subgender</div>
                )}
              </div>
            </div>
          ) : (
            <div className="step not-allowed" key={ind}>
              {el.number}
              <div>
                {el.number === 1 && <div className="name-of-step">Gender</div>}
              </div>
              <div>
                {el.number === 2 && (
                  <div className="name-of-step">Subgender</div>
                )}
              </div>
            </div>
          )
        )}
        <div className="step dots not-allowed">...</div>
      </div>
    );
  }

  return (
    <div className="steps">
      {steps.map((el, ind, arr) =>
        el.active ? (
          <div
            onClick={() => dispatch(setStepFunc(el.number))}
            key={ind}
            className={`step ${step === el.number ? "active" : ""}`}
          >
            {el.number}
            <div>
              {el.number === 1 && <div className="name-of-step">Gender</div>}
            </div>
            <div>
              {el.number === 2 && <div className="name-of-step">Subgender</div>}
            </div>
            <div>
              {steps.length === 3 && el.number === 3 && (
                <div className="name-of-step">Information</div>
              )}
            </div>
            <div>
              {steps.length === 4 && el.number === 3 && (
                <div className="name-of-step">Add new subgender</div>
              )}
            </div>
            <div>
              {steps.length === 4 && el.number === 4 && (
                <div className="name-of-step">Information</div>
              )}
            </div>
          </div>
        ) : (
          <div className="step not-allowed" key={ind}>
            {el.number}
            <div>
              {el.number === 1 && <div className="name-of-step">Gender</div>}
            </div>
            <div>
              {el.number === 2 && <div className="name-of-step">Subgender</div>}
            </div>
            <div>
              {steps.length === 3 && el.number === 3 && (
                <div className="name-of-step">Information</div>
              )}
            </div>
            <div>
              {steps.length === 4 && el.number === 3 && (
                <div className="name-of-step">Add new subgender</div>
              )}
            </div>
            <div>
              {steps.length === 4 && el.number === 4 && (
                <div className="name-of-step">Information</div>
              )}
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default Steps;
