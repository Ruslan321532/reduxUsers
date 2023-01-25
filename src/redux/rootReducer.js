import { combineReducers } from "redux";
import { operationsReducer } from "./userSapp/reducers/operations";

export const rootReducer = combineReducers({
    operationsReducer,
})