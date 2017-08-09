import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";
import createTaskReducer from "../pages/CreateTask/createTask.reducers.js";

export default function createReducer(asyncReducers) {
    const appReducer = combineReducers({
        createTask : createTaskReducer,
        routing  : routerReducer,
        ...asyncReducers
    });
    return (state, action) => {
        return appReducer(state, action)
    };
};