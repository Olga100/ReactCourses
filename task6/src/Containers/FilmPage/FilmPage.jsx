import React, { Component } from 'react';
import {connect} from 'react-redux';

import ErrorBoundary from '../../Components/ErrorBoundary';
import MovieDetails from '../../Components/MovieDetails/MovieDetails';
import LineResultGenges from '../../Components/LineResultGenres/LineResultGenres';
import MovieListFilmPage from '../../Components/MovieListFilmPage/MovieListFilmPage'
import './FilmPage.scss';

import getMovies from '../../api';




class FilmPageView extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {


    }




    render() {
        const movie = this.props.movie;

        return (
            <div className="App">
                <ErrorBoundary>
                    <div className="filmPageContainer">
                        <MovieDetails movie={movie}/>
                        <LineResultGenges/>
                        <MovieListFilmPage/>
                    </div>

                </ErrorBoundary>
            </div>
        );
    }
}
const mapStateToProps =  (state) => ({
    movie: state.movie,
});

const FilmPage = connect(mapStateToProps)(FilmPageView);

export default FilmPage;