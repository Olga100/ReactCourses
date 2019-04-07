import React from 'react';
import renderer from 'react-test-renderer';
import {mount} from 'enzyme';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import SearchPage from './SearchPage';


describe ('SearchPage', () => {

    it('should match snapshot with data', () => {

        const component = renderer.create(
            <SearchPage />
        );
        const json = component.toJSON();

        expect(json).toMatchSnapshot();
    });

    it('should handle state "searchBy" changes', () => {

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
    });

    it('should handle state "movies" changes', () => {
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
        mock.onGet('https://reactjs-cdp.herokuapp.com/movies?searchBy=title&sortBy=release_date&sortOrder=desc').reply(200, {data: []});
        mock.onGet(`https://reactjs-cdp.herokuapp.com/movies?search=${searchText}&searchBy=title&sortBy=release_date&sortOrder=desc`).reply(200, {data: expected});

        const content = mount(
            <SearchPage />
        );

        content.find('input').simulate('change', {target: {value: searchText}});
        const form = content.find('form').at(0);
        form.simulate('submit');

        setImmediate(() => {
            expect(content.state().movies).toHaveLength(1);
        });
    });
});
