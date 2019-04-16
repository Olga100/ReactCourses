import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';

import mainReducer from './Reducers/mainReducer';

const persistConfig = {
    key: 'root',
    storage: storage
};

let devTools = f => f;

if (process.browser &&
    process.env.NODE_ENV !== 'production' &&
    window.__REDUX_DEVTOOLS_EXTENSION__) {
    devTools = window.__REDUX_DEVTOOLS_EXTENSION__();
}

const persistedReducer = persistReducer(persistConfig, mainReducer);

const store = createStore(persistedReducer, compose(applyMiddleware(thunkMiddleware) ));

const persistor = persistStore(store);

export { store, persistor };
