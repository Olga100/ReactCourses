import React from 'react';
import {Provider} from 'react-redux'
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter'
import {createStore, applyMiddleware} from 'redux';
import mainReducer from '../../Reducers/mainReducer';
import thunkMiddleware from 'redux-thunk';
import expect from 'expect';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import MovieDetailsPage from './MovieDetailsPage';
import renderer from 'react-test-renderer';

const initialState = {
    movies: [],
    sortBy: 'release_date',
    searchBy: 'title',
    searchText: ""
};

describe ('MovieDetailsPage', () => {

    it('should match snapshot with data', () => {

        const mock = new MockAdapter(axios);
        mock.onGet('https://reactjs-cdp.herokuapp.com/movies?').reply(200, {data: []});
        mock.onGet('https://reactjs-cdp.herokuapp.com/movies?searchBy=title&sortBy=release_date&sortOrder=desc').reply(200, {data: []});

        const state = {
            movies: [],
            sortBy: 'release_date',
            searchBy: 'title',
            searchText: ""
        };

        const store = createStore(mainReducer, initialState, applyMiddleware(thunkMiddleware));

        const component = renderer.create(
            <Provider store={store}>
                <Router>
                    <MovieDetailsPage />
                </Router>
            </Provider>
        );
        //component.setProps({params: { id: '299536'}})
        component.instance().props.match.params.id = '299537';
        const json = component.toJSON();

        expect(json).toMatchSnapshot();
    });
});
//this.props.location.pathname       wrapper.setProps({location: { pathname: 'testUrl2'}})
//this.props.match.params.id

