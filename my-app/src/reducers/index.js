import { combineReducers } from "redux";
import BooksReducer from "./BooksReducer";

const reducers = combineReducers({
  books: BooksReducer,
});

export default reducers;
