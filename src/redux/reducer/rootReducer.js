import {FakeBookReducer} from "./FakeBookReducer";
import {ToDoListReducer} from "./ToDoListReducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
    ToDoListReducer,
    FakeBookReducer
})