import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';

import mainReducer from './Reducers/mainReducer';

let devTools = f => f;

if (process.browser &&
    process.env.NODE_ENV !== 'production' &&
    window.__REDUX_DEVTOOLS_EXTENSION__) {
    devTools = window.__REDUX_DEVTOOLS_EXTENSION__();
}

export default (initialState, options) => createStore(mainReducer, initialState, compose(applyMiddleware(thunkMiddleware), devTools));
