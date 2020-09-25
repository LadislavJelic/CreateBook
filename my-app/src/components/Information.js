import React, { useState, useEffect } from "react";
import { fetchData } from "../actions/booksActions";
import { useSelector, useDispatch } from "react-redux";
import { setStepFunc, createNewBookFunc } from "../actions/booksActions";

function Genre() {
  const data = useSelector((state) => state.books);
  const {
    step,
    author,
    publisher,
    format,
    editionLanguage,
    newBook,
    descriptionRequireBool,
  } = data;
  const dispatch = useDispatch();

  let [bookInformation, setBookInformation] = useState({
    bookTitle: "",
    author: "",
    isbn: "",
    publisher: publisher[0],
    datePublisher: "",
    numberOfPages: "",
    format: format[0],
    edition: "",
    editionLanguage: editionLanguage[0],
    description: "",
  });
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  function onSubmit(e) {
    e.preventDefault();
    newBook.information = bookInformation;
    dispatch(createNewBookFunc(newBook));
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setBookInformation({ ...bookInformation, [name]: value });
  }

  return (
    <div className="information">
      <form onSubmit={onSubmit}>
        <div className="wrapper-label-input input">
          <label htmlFor="book-title">Book title</label>
          <input
            type="text"
            name="bookTitle"
            id="book-title"
            placeholder="Book title"
            className="width-100 input"
            onChange={(e) => handleChange(e)}
            value={bookInformation.bookTitle}
          />
        </div>
        <div className="wrapper-label-input input">
          <label htmlFor="author">Author</label>
          <select
            name="author"
            id="author"
            className="width-100 input"
            onChange={(e) => handleChange(e)}
            defaultValue={"author"}
          >
            <option value="author" disabled hidden>
              Author
            </option>
            {author.map((el, ind, arr) => (
              <option key={ind}>{el}</option>
            ))}
          </select>
        </div>
        <div className="wrapper-label-input input">
          <label htmlFor="isbn">ISBN</label>
          <input
            type="text"
            name="isbn"
            id="isbn"
            placeholder="ISBN"
            className="width-100 input"
            onChange={(e) => handleChange(e)}
            value={bookInformation.isbn}
          />
        </div>
        <div className="wrapper-label-input input">
          <label htmlFor="publisher">Publisher</label>
          <select
            name="publisher"
            id="publisher"
            className="width-100 input"
            onChange={(e) => handleChange(e)}
            defaultValue={"publisher"}
          >
            <option value="publisher" disabled hidden>
              publisher
            </option>
            {publisher.map((el, ind, arr) => (
              <option key={ind}>{el}</option>
            ))}
          </select>
        </div>
        <div className="wrapper-label-input input">
          <label htmlFor="date-publisher">Date publisher</label>
          <input
            type="date"
            name="datePublisher"
            id="date-publisher"
            placeholder="Date publisher"
            className="input"
            onChange={(e) => handleChange(e)}
            value={bookInformation.datePublisher}
          />
        </div>
        <div className="wrapper-label-input input">
          <label htmlFor="number-of-pages">Number of pages</label>
          <input
            type="number"
            name="numberOfPages"
            id="number-of-pages"
            placeholder="Number of pages"
            className="input"
            onChange={(e) => handleChange(e)}
            value={bookInformation.numberOfPages}
          />
        </div>
        <div className="wrapper-label-input input">
          <label htmlFor="format">Format</label>
          <select
            name="format"
            id="format"
            className="input"
            onChange={(e) => handleChange(e)}
            defaultValue={"format"}
          >
            <option value="format" disabled hidden>
              format
            </option>
            {format.map((el, ind, arr) => (
              <option key={ind}>{el}</option>
            ))}
          </select>
        </div>
        <div className="edition-edition-language-wrapper">
          <div className="wrapper-label-input input edition">
            <label htmlFor="edition">Edition</label>
            <input
              type="text"
              name="edition"
              id="edition"
              placeholder="Edition"
              className="input"
              onChange={(e) => handleChange(e)}
              value={bookInformation.edition}
            />
          </div>
          <div className="wrapper-label-input input edition-language">
            <label htmlFor="edition-language">Edition language</label>
            <select
              name="editionLanguage"
              id="edition-language"
              className="input"
              onChange={(e) => handleChange(e)}
              defaultValue={"editionLanguage"}
            >
              <option value="editionLanguage" disabled hidden>
                edition language
              </option>
              {editionLanguage.map((el, ind, arr) => (
                <option key={ind}>{el}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="wrapper-label-input input">
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            placeholder="Description"
            className="width-100%"
            id="description"
            onChange={(e) => handleChange(e)}
            value={bookInformation.description}
            required={descriptionRequireBool}
          ></textarea>
        </div>
        <div className="buttons buttons-modal">
          <div
            className="button button-back active"
            onClick={() => dispatch(setStepFunc(step - 1))}
          >
            Back
          </div>
          <button type="submit" className="button dark active">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default Genre;
