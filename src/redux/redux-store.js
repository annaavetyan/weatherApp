import React from "react";
import {applyMiddleware, combineReducers, createStore} from "redux";
import weatherPageReducer from "./weatherPageReducer";
import {thunk} from "redux-thunk";

const reducers = combineReducers({
    weatherPage: weatherPageReducer
})

const store = createStore(reducers, applyMiddleware(thunk));

export default store