import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';

import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import mainReducer from './Reducers/mainReducer';

const persistConfig = {
    key: 'root',
    storage: storage,
    stateReconciler: autoMergeLevel2
};

const persistedReducer = persistReducer(persistConfig, mainReducer);

const store = createStore(persistedReducer, {
    viewState: {
        movies: [],
            sortBy: 'release_date',
            searchBy: 'title',
            searchText: ""
    }
},
applyMiddleware(thunkMiddleware));

const persistor = persistStore(store);

export { store, persistor };
