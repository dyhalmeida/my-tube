import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import reduxLogger from 'redux-logger';

import reducers from './reducers';

const composeEnhancement = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewareList = [
    reduxThunk,
    reduxLogger
]

const store = createStore(reducers, composeEnhancement(applyMiddleware(...middlewareList)));

export default store;