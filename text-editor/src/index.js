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
import App from './container/App/App';
import createTask from './pages/CreateTask/createTask.js';


export const store = configureStore(browserHistory);
const history = syncHistoryWithStore(browserHistory, store);

const onAppEnter = (nextState, replace)=> {
	const {pathname} = nextState.location;
	if(pathname == '/') {
		localStorage.clear();
	}
	else if(pathname == '/login') {
		localStorage.clear();
		store.getState().login.set({
			loggedIn: false,
			error   : false,
			data    : []
		});
	}

	else if(!store.getState().login.get("loggedIn") && (location.pathname == '/timeline')) {
		replace(`${'/login'}`);
		return false;
	}
};

const rootRoute = {
	path       : '/',
	component  : App,
	onEnter    : onAppEnter,
	indexRoute : {
		component: createTask
	},
	childRoutes: createRoutes(store)
};

render(
	<Provider store={store}>
		<Router routes={rootRoute} history={history}/>
	</Provider>,
	document.getElementById('root')
);