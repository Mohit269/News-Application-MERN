import { applyMiddleware, createStore } from "redux";
import reducers from './reducer/index.js'
import thunk from "redux-thunk";
export const store = createStore(reducers,{},applyMiddleware(thunk));