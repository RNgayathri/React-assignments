import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";
import EmojisReducer from "../pages/Emojis/Emojis.reducer.js";
import LoginReducer from "../pages/Login/Login.reducers.js";

export default function createReducer(asyncReducers) {
    const appReducer = combineReducers({
        Login:   LoginReducer,
        Emojis : EmojisReducer,
        routing  : routerReducer,
        ...asyncReducers
    });
    return (state, action) => {
        return appReducer(state, action)
    };
};