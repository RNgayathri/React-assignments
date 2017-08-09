import * as React from "react";
import 'babel-polyfill';
import {render} from "react-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";

import {
    browserHistory,
    Router
} from 'react-router';
import configureStore from "./store.js";
import {syncHistoryWithStore} from 'react-router-redux';
import createRoutes from './routes';
import App from './Container/App';
import Dropdown from './Pages/Dropdown/Dropdown';


export const store = configureStore(browserHistory);
const history = syncHistoryWithStore(browserHistory, store);

const onAppEnter = (nextState, replace)=> {
    const {pathname} = nextState.location;

};

const rootRoute = {
    path       : '/',
    component  : App,
    onEnter    : onAppEnter,
    indexRoute : {
        component: Dropdown
    },
    childRoutes: createRoutes(store)
};

render(
    <Provider store={store}>
        <Router routes={rootRoute} history={history}/>
    </Provider>,
    document.getElementById('root')
);