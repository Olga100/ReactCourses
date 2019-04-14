import React, { Component } from 'react';
import {Provider} from 'react-redux'
import Footer from '../Components/Footer/Footer';
import SearchPage from '../Containers/SearchPage/SearchPage'
import thunkMiddleware from 'redux-thunk';
import {combineReducers, createStore, applyMiddleware} from 'redux';
import {mainReducer} from '../Reducers/mainReducer';

import './App.scss';

const store = createStore(mainReducer, {
        viewState: {
            movies: [],
            sortBy: 'release_date',
            searchBy: 'title',
            searchText: ""
        }
    },
    applyMiddleware(thunkMiddleware));

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <SearchPage/>
                    <Footer/>
                </div>
            </Provider>
        );
    }
}

export default App;
