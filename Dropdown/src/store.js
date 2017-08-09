import {createStore, applyMiddleware, compose} from 'redux';
import {routerMiddleware} from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import createReducer from './reducers';

import {fromJS} from 'immutable';
const sagaMiddleware = createSagaMiddleware();

const localStorageMiddleware = ({getState}) => {
    return (next) => (action) => {
        const result = next(action);
        return result;
    };
};

const getInitialStateFromLocalStorage = () => {

};

export default function configureStore(history) {
    const router = routerMiddleware(history);

    const composeEnhancers =
        process.env.NODE_ENV !== 'production' &&
        typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
                // shouldHotReload: false
            }) : compose;

    const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware, router, localStorageMiddleware));

    const store = createStore(createReducer(), getInitialStateFromLocalStorage(), enhancer);


    store.runSaga = sagaMiddleware.run;
    // Async reducer registry
    store.asyncReducers = {};

    // Make reducers hot reloadable, see http://mxs.is/googmo
    /* istanbul ignore next */
    /**if (module.hot) {
        module.hot.accept('./reducers', () => {
            const nextRootReducer = require('./reducers').default;
            store.replaceReducer(nextRootReducer);
        });
    }**/

    return store;
}