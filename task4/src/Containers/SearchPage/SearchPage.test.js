import React from 'react';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';

import SearchPage from './SearchPage';


describe ('SearchPage', () => {

    it('should match snapshot with data', () => {

        const movies =
            [
                {
                    title: "title1",
                    poster_path: "http://www.theamazingpics.com/wp-content/uploads/2014/05/Amazing-Picture-of-A-Japanese-Garden-in-Portland-USA.jpg",
                    genres: ["horror"],
                    release_date: "2011-10-05T14:48:00.000Z"
                },
                {
                    title: "title2",
                    poster_path: "http://www.theamazingpics.com/wp-content/uploads/2014/05/Amazing-Picture-of-A-Japanese-Garden-in-Portland-USA.jpg",
                    genres: ["fantasy"],
                    release_date: "2011-12-05T14:48:00.000Z"
                }
            ];

        const component = renderer.create(
            <SearchPage  searchBy={'title'}  sortBy={'release_date'} movies={movies} />
        );
        const json = component.toJSON();

        expect(json).toMatchSnapshot();
    });

});
