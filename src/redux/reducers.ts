import {combineReducers} from "@reduxjs/toolkit";
import todoReducer from "./todos/todoReducer";

const rootReducer = combineReducers({
    todoReducer,
})
export default rootReducer

