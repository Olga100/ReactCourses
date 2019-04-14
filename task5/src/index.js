import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import {Provider} from 'react-redux'
import thunkMiddleware from 'redux-thunk';
import {combineReducers, createStore, applyMiddleware} from 'redux';
//import {currentMovieReducer, moviesReducer, viewStateReducer} from './Reducers/reducers';

import {mainReducer} from './Reducers/mainReducer';

/*const combinedReducers = combineReducers({
    movies: moviesReducer,
    currentMovie: currentMovieReducer,
    viewState: viewStateReducer
});*/



const store = createStore(mainReducer, {
        viewState: {
            movies: [],
            sortBy: 'release_date',
            searchBy: 'title',
            searchText: ""
        }
    },
    applyMiddleware(thunkMiddleware));


ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>
    , document.getElementById('root')
);

if (module.hot) {
    module.hot.accept();
}
