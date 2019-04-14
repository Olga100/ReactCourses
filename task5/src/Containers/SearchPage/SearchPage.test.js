import React from 'react';
import {Provider} from 'react-redux'
import renderer from 'react-test-renderer';
import {mount} from 'enzyme';
import axios from 'axios';
import {loadMovies } from '../../Actions/Actions';
import MockAdapter from 'axios-mock-adapter';
import thunkMiddleware from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import {mainReducer} from '../../Reducers/mainReducer';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expect from 'expect';
import SearchPage from './SearchPage';

import  movies  from '../../mocks/movies.json';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const axiosMock = new MockAdapter(axios);

describe ('SearchPage', () => {

    afterEach(() => {
        axiosMock.reset();
    });


    it('should match snapshot with data', () => {

        const mock = new MockAdapter(axios);
        mock.onGet('https://reactjs-cdp.herokuapp.com/movies?').reply(200, {data: []});
        mock.onGet('https://reactjs-cdp.herokuapp.com/movies?searchBy=title&sortBy=release_date&sortOrder=desc').reply(200, {data: []});

        const state = {
            viewState: {
                movies: [],
                sortBy: 'release_date',
                searchBy: 'title',
                searchText: ""
            }
        };

        const store = mockStore(() => state);

        const component = renderer.create(
            <Provider store={store}>
                <SearchPage />
            </Provider>
        );
        const json = component.toJSON();

        expect(json).toMatchSnapshot();
    });

   /* it('should handle state "searchBy" changes', () => {

        const content = mount(
            <SearchPage/>
        );

        expect(content.state().searchBy).toEqual('title');
        content.find('#genre').simulate('click');
        expect(content.state().searchBy).toEqual('genres');
    });

    it('should handle state "sortBy" changes', () => {

        const content = mount(
            <SearchPage/>
        );

        expect(content.state().sortBy).toEqual('release_date');
        content.find('#sortByRating').simulate('click');
        expect(content.state().sortBy).toEqual('vote_average');
    });

    it('should handle state "searchText" changes', () => {

        const content = mount(
            <SearchPage/>
        );

        expect(content.state().searchText).toEqual('');
        content.find('input').simulate('change', {target: {value:'war'}});
        expect(content.state().searchText).toEqual('war');
    });*/

    it('should handle store "movies" changes', () => {
        const searchText = "Star war";

        const expected =
            [
                {
                    id: 1,
                    title: "Star war",
                    poster_path: "http://www.theamazingpics.com/wp-content/uploads/2014/05/Amazing-Picture-of-A-Japanese-Garden-in-Portland-USA.jpg",
                    genres: ["horror"],
                    release_date: "2011-10-05T14:48:00.000Z"
                }
            ];

        const mock = new MockAdapter(axios);
        mock.onGet('https://reactjs-cdp.herokuapp.com/movies?').reply(200, {data: []});
        mock.onGet('https://reactjs-cdp.herokuapp.com/movies?searchBy=title&sortBy=release_date&sortOrder=desc').reply(200, {data: []});
        mock.onGet(`https://reactjs-cdp.herokuapp.com/movies?search=${searchText}&searchBy=title&sortBy=release_date&sortOrder=desc`).reply(200, {data: expected});

        const state = {
            viewState: {
                movies: [],
                sortBy: 'release_date',
                searchBy: 'title',
                searchText: ""
            }
        };

        const store = mockStore(() => state);

        const content = mount(
            <Provider store={store}>
                <SearchPage />
            </Provider>
        );

        const expectedStore = {
            viewState: {
                movies: movies,
                sortBy: 'release_date',
                searchBy: 'title',
                searchText: ""
            }
        };

        content.find('input').simulate('change', {target: {value: searchText}});
        const form = content.find('form').at(0);
        form.simulate('submit');

        //expect(store.getActions()).toEqual(expectedActions);

        /*setImmediate(() => {
            expect(store.getState()).toEqual(expectedStore);
        });*/
    });


////////////////////
    /*it('+++ check Prop matches with initialState', () => {

        const initialState = {
            viewState: {
                movies: [],
                sortBy: 'release_date',
                searchBy: 'title',
                searchText: ""
            }
        };

        let store,wrapper;
        beforeEach(()=>{
            store = createStore(mainReducers);
            wrapper = mount( <Provider store={store}><SearchPage /></Provider> );
        })

        store.dispatch(loadMovies());
        expect(wrapper.find(SearchPage).prop('loadMoves')).toBe();
    });*/
});

