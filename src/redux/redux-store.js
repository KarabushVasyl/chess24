import { combineReducers, createStore } from "redux";
import listReducer from "./list-reducer";

let reducers = combineReducers({
	mainList: listReducer
})

let store = createStore(reducers);

export default store;
window.store = store;