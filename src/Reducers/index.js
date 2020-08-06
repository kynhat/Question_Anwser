import { combineReducers } from "redux";
import todos from "./data";
import item from "./anwers";
import core from "./core";

export default combineReducers({
  todos: todos,
  item: item,
  // core:core
});
