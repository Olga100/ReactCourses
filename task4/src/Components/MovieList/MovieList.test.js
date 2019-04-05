import React from 'react';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';

import MovieList  from './MovieList';

describe('<MovieList/>', () => {

    it('Renders  component with list of the movie', () => {

        const movies =
            [
                {
                    id: 23456,
                    title: "title1",
                    poster_path: "http://www.theamazingpics.com/wp-content/uploads/2014/05/Amazing-Picture-of-A-Japanese-Garden-in-Portland-USA.jpg",
                    genres: ["horror"],
                    release_date: "2011-10-05T14:48:00.000Z"
                },
                {
                    id: 12345,
                    title: "title2",
                    poster_path: "http://www.theamazingpics.com/wp-content/uploads/2014/05/Amazing-Picture-of-A-Japanese-Garden-in-Portland-USA.jpg",
                    genres: ["fantasy"],
                    release_date: "2011-12-05T14:48:00.000Z"
                }
            ];

        const component = renderer.create(
            <MovieList movies={movies}/>
        );

        const json = component.toJSON();

        expect(json).toMatchSnapshot();
    });

    it('Renders  component without data of movies', () => {

        const movies =
            [];

        const component = renderer.create(
            <MovieList movies={movies}/>
        );

        const json = component.toJSON();

        expect(json).toMatchSnapshot();
    });
});