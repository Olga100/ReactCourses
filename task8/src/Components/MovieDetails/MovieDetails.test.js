import React from 'react';
import renderer from 'react-test-renderer';

import MovieDetails from './MovieDetails';
import {BrowserRouter as Router} from 'react-router-dom';


describe ('MovieDetails', () => {

    const movie = {
        title: "title",
        poster_path: "http://www.theamazingpics.com/wp-content/uploads/2014/05/Amazing-Picture-of-A-Japanese-Garden-in-Portland-USA.jpg",
        tagline: "some text about movie",
        release_date: "2011-10-05T14:48:00.000Z",
        runtime: 126,
        overview: "a lot of long-long text"
    };

    it('should match snapshot with data', () => {
        const component = renderer.create(
            <Router>
                <MovieDetails  movie={movie}/>
            </Router>
        );
        const json = component.toJSON();

        expect(json).toMatchSnapshot();
    });

});