import data from "../Data";
export const FETCH_DATA = "FETCH_DATA";
export const SET_GENRE = "SUB_GENRE";
export const SET_STEP = "SET_STEP";
export const INITIAL_STEPS = "INITIAL_STEPS";
export const SET_FOUR_STEPS = "SET_FOUR_STEPS";
export const SET_FOUR_STEPS_ACTIVE = "SET_FOUR_STEPS_ACTIVE";
export const SET_THREE_STEPS = "SET_THREE_STEPS";
export const ALLOWED_STEPS = "ALLOWED_STEPS";
export const SET_GENRE_NAME = "SET_GENRE_NAME";
export const SET_SUB_GENRE_NAME = "SET_SUB_GENRE_NAME";
export const SET_DESCRIPTION_REQUIRE = "SET_DESCRIPTION_REQUIRE";
export const CREATE_NEW_BOOK = "CREATE_NEW_BOOK";
export const ADD_ANOTHER_BOOK = "ADD_ANOTHER_BOOK";

export const fetchBooksData = (data) => {
  return {
    type: FETCH_DATA,
    payload: data,
  };
};

export const setGenre = (geners) => {
  return {
    type: SET_GENRE,
    payload: geners,
  };
};

export const setStep = (step) => {
  return {
    type: SET_STEP,
    payload: step,
  };
};

export const initialSteps = () => {
  return {
    type: INITIAL_STEPS,
  };
};

export const addNewStep = () => {
  return {
    type: SET_FOUR_STEPS,
  };
};

export const setForSteps = () => {
  return {
    type: SET_FOUR_STEPS,
  };
};

export const setFourStepsActive = () => {
  return {
    type: SET_FOUR_STEPS_ACTIVE,
  };
};

export const setThreeSteps = () => {
  return {
    type: SET_THREE_STEPS,
  };
};

export const setGenreName = (data) => {
  return {
    type: SET_GENRE_NAME,
    payload: data,
  };
};

export const setSubGenreName = (data) => {
  return {
    type: SET_SUB_GENRE_NAME,
    payload: data,
  };
};

export const addDescriptionRequire = (bool) => {
  return {
    type: SET_DESCRIPTION_REQUIRE,
    payload: bool,
  };
};

export const createNewBook = () => {
  return {
    type: CREATE_NEW_BOOK,
  };
};

export const addAnotherBook = () => {
  return {
    type: ADD_ANOTHER_BOOK,
  };
};

export const fetchData = () => {
  return (dispatch) => {
    dispatch(fetchBooksData(data.genres));
  };
};

export const setGenreFunc = (geners) => {
  return (dispatch) => {
    dispatch(setGenre(geners));
  };
};

export const setGenreNameFunc = (data) => {
  return (dispatch) => {
    dispatch(setGenreName(data.name));
  };
};

export const setSubGenreNameFunc = (data) => {
  return (dispatch) => {
    dispatch(setSubGenreName(data.name));
    dispatch(setStep(3));
  };
};

export const setAddSubGenreNameFunc = (data) => {
  return (dispatch) => {
    dispatch(setSubGenreName(data));
  };
};

export const setFourStepsActiveFunc = () => {
  return (dispatch) => {
    dispatch(setFourStepsActive());
  };
};

export const setStepFunc = (step) => {
  return (dispatch) => {
    dispatch(setStep(step));
  };
};

export const setSubGenreFunc = (subGeners) => {
  return (dispatch) => {
    dispatch(setThreeSteps(subGeners));
  };
};

export const addNewStepFunc = (step) => {
  return (dispatch) => {
    dispatch(setStep(step));
    dispatch(setSubGenreName(""));
    dispatch(addNewStep());
  };
};

export const setForStepsFunc = () => {
  return (dispatch) => {
    dispatch(setForSteps());
  };
};

export const addDescriptionRequireFunc = (bool) => {
  return (dispatch) => {
    dispatch(addDescriptionRequire(bool));
  };
};

export const createNewBookFunc = (newBook) => {
  return (dispatch) => {
    dispatch(createNewBook());
    // here is console.log(newBook); that is object for new book
    console.log(newBook);
  };
  // this is if is real http
  // const url = `someUrl`;
  // return (dispatch) => {
  //   axios
  //     .post(url, newBook)
  //     .then((response) => {
  //       // here we should get response
  //       console.log(response);
  //     })
  //     .catch((error) => {
  //       //just console.log errors if exist.
  //       console.log(error);
  //     });
  // };
};

export const addAnotherBookFunc = () => {
  return (dispatch) => {
    dispatch(addAnotherBook());
  };
};
