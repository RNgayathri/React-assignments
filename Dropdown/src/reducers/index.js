import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";

export default function createReducer(asyncReducers) {
    const appReducer = combineReducers({
        routing  : routerReducer,
        ...asyncReducers
    });
    return (state, action) => {
        return appReducer(state, action)
    };
};