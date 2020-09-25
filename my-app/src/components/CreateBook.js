import React from "react";
import Genre from "./Genre";
import Subgenre from "./Subgenre";
import AddSubgenre from "./AddSubgenre";
import Information from "./Information";
import Steps from "./Steps";
import AddAnotherBook from "./AddAnotherBook";
import { useSelector } from "react-redux";

function CreateBook() {
  const data = useSelector((state) => state.books);
  const { step, steps, createNewBook } = data;
  return (
    <>
      {createNewBook ? (
        <div className="create-book">
          <div>Add book / New Book</div>
          <Steps />
          {step === 1 && <Genre />}
          {step === 2 && <Subgenre />}
          {steps.length === 3 && step === 3 && <Information />}
          {steps.length === 4 && step === 3 && <AddSubgenre />}
          {steps.length === 4 && step === 4 && <Information />}
        </div>
      ) : (
        <AddAnotherBook />
      )}
    </>
  );
}

export default CreateBook;
