import {createStore, applyMiddleware} from "redux";
import reducer from "../reducers/basketReducer";
//import thunk from "redux-thunk";
import logger from "redux-logger";
import {composeWithDevTools} from "redux-devtools-extension";

const store = createStore(
	reducer,
	composeWithDevTools(applyMiddleware(logger))
);

export default store;
