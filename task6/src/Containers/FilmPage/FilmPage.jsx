import React, { Component } from 'react';

import ErrorBoundary from '../../Components/ErrorBoundary';
import MovieDetails from '../../Components/MovieDetails/MovieDetails';
import LineResultGenges from '../../Components/LineResultGenres/LineResultGenres';
import MovieListFilmPage from '../../Components/MovieListFilmPage/MovieListFilmPage'
import './FilmPage.scss';




class FilmPage extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {

    }




    render() {

        return (
            <div className="App">
                <ErrorBoundary>
                    <div className="filmPageContainer">
                        <MovieDetails />
                        <LineResultGenges/>
                        <MovieListFilmPage/>
                    </div>

                </ErrorBoundary>
            </div>
        );
    }
}

export default FilmPage;