import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter as Router} from 'react-router-dom';

import MovieThumbnail from './MovieThumbnail';


describe ('MovieThumbnail', () => {

    const movie = {
        title: "title",
        poster_path: "http://www.theamazingpics.com/wp-content/uploads/2014/05/Amazing-Picture-of-A-Japanese-Garden-in-Portland-USA.jpg",
        genres: ["horror"],
        release_date: "2011-10-05T14:48:00.000Z"
    };

    it('should match snapshot with data', () => {
        const component = renderer.create(
            <Router>
                <MovieThumbnail  movie={movie}/>
            </Router>
        );
        const json = component.toJSON();

        expect(json).toMatchSnapshot();
    });

});