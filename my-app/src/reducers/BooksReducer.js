import {
  FETCH_DATA,
  SET_GENRE,
  SET_STEP,
  SET_THREE_STEPS,
  SET_FOUR_STEPS,
  SET_FOUR_STEPS_ACTIVE,
  SET_GENRE_NAME,
  SET_SUB_GENRE_NAME,
  SET_DESCRIPTION_REQUIRE,
  CREATE_NEW_BOOK,
  ADD_ANOTHER_BOOK,
} from "../actions/booksActions";

const initialState = {
  genres: [],
  subgenresOptions: [],
  step: 1,
  steps: [
    { number: 1, active: true },
    { number: 2, active: false },
    { number: 3, active: false },
  ],
  newBook: {
    genre: "",
    subGenre: "",
    information: {},
  },
  author: ["author1", "author2", "author3", "author4", "author5"],
  publisher: [
    "publisher1",
    "publisher2",
    "publisher3",
    "publisher4",
    "publisher5",
  ],
  format: ["format1", "format2", "format3", "format4"],
  editionLanguage: ["english", "germany", "japanese", "chinese"],
  descriptionRequireBool: false,
  createNewBook: true,
};

const BooksReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        genres: action.payload,
      };
    case SET_GENRE:
      return {
        ...state,
        subgenresOptions: action.payload,
      };
    case SET_STEP:
      return {
        ...state,
        step: action.payload,
      };
    case SET_FOUR_STEPS_ACTIVE:
      return {
        ...state,
        steps: [
          { number: 1, active: true },
          { number: 2, active: true },
          { number: 3, active: true },
          { number: 4, active: true },
        ],
      };
    case SET_FOUR_STEPS:
      return {
        ...state,
        steps: [
          { number: 1, active: true },
          { number: 2, active: true },
          { number: 3, active: true },
          { number: 4, active: false },
        ],
      };
    case SET_THREE_STEPS:
      return {
        ...state,
        steps: [
          { number: 1, active: true },
          { number: 2, active: true },
          { number: 3, active: true },
        ],
      };
    case SET_GENRE_NAME:
      return {
        ...state,
        newBook: {
          ...state.newBook,
          genre: action.payload,
        },
        steps: [
          { number: 1, active: true },
          { number: 2, active: true },
          { number: 3, active: false },
        ],
      };
    case SET_SUB_GENRE_NAME:
      return {
        ...state,
        newBook: {
          ...state.newBook,
          subGenre: action.payload,
        },
      };
    case SET_DESCRIPTION_REQUIRE:
      return {
        ...state,
        descriptionRequireBool: action.payload,
      };
    case CREATE_NEW_BOOK:
      return {
        ...state,
        createNewBook: false,
      };
    case ADD_ANOTHER_BOOK:
      return {
        ...state,
        genres: [],
        subgenresOptions: [],
        step: 1,
        steps: [
          { number: 1, active: true },
          { number: 2, active: false },
          { number: 3, active: false },
        ],
        newBook: {
          genre: "",
          subGenre: "",
          information: {},
        },
        descriptionRequireBool: false,
        createNewBook: true,
      };
    default:
      return state;
  }
};

export default BooksReducer;
