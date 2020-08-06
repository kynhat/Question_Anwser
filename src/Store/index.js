
import combinedReducers from "../Reducers";
import { createStore } from 'redux'
const store = createStore(combinedReducers);
export default store;
