import React from 'react';
import {Provider} from 'react-redux'
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter'
import {createStore, applyMiddleware} from 'redux';
import mainReducer from '../../Reducers/mainReducer';
import thunkMiddleware from 'redux-thunk';
import expect from 'expect';
import {StaticRouter, Route, Link} from 'react-router-dom';
import MovieDetailsPage from './MovieDetailsPage';
import renderer from 'react-test-renderer';

describe ('MovieDetailsPage', () => {

    it('should match snapshot with data', () => {

        var movie = {
            "id": 123,
            "title": "Star war",
            "poster_path": "https:\/\/images-na.ssl-images-amazon.com\/images\/M\/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_SY500_CR0,0,336,500_AL_.jpg",
            "genres": [
                "Crime",
                "Drama"
            ],
            "release_date": "2011-10-05"
        };

        const mock = new MockAdapter(axios);
        mock.onGet('https://reactjs-cdp.herokuapp.com/movies?searchBy=genres&filter=' + movie.genres.join(',')).reply(200, {data: [movie]});
        mock.onGet('https://reactjs-cdp.herokuapp.com/movies/' + movie.id).reply(200, movie);

        const store = createStore(mainReducer, {}, applyMiddleware(thunkMiddleware));

        const component = renderer.create(
            <StaticRouter location={"/film/" + movie.id}>
                <Provider store={store}>
                    <Route path="/film/:id" component={MovieDetailsPage} />
                </Provider>
            </StaticRouter>
        );

        const json = component.toJSON();

        expect(json).toMatchSnapshot();
    });
});

