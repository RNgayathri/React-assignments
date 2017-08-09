import 'file?name=[name].[ext]!./images/favicon.ico';
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
import Emojis from './pages/Emojis/Emojis.js';
import Login from './pages/Login/Login.js';

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
		component: Emojis
	},
	childRoutes: createRoutes(store)
};

render(
	<Provider store={store}>
		<Router routes={rootRoute} history={history}/>
	</Provider>,
	document.getElementById('root')
);