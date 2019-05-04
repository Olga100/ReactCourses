import React, {Component} from 'react';
import {connect} from 'react-redux';

import Router, { withRouter } from 'next/router';

import MovieDetails from '../Components/MovieDetails/MovieDetails';
import MovieList from '../Components/MovieList/MovieList';
import LineResultGenres from '../Components/LineResultGenres/LineResultGenres';

import { loadMovieDetails } from '../Actions/Actions';


class MovieDetailsPageView extends Component {

    static async getInitialProps({store, query}) {
        await store.dispatch(loadMovieDetails(query.id));
        return {};
    }

    render() {
        const {movieDetails, relatedMovies} = this.props;

        if (movieDetails) {
            return (
                <div className="App">
                    <div className="filmPageContainer">
                        <MovieDetails movie={movieDetails}/>
                        <LineResultGenres genres={movieDetails.genres}/>
                        <MovieList movies={relatedMovies} />
                    </div>
                </div>
            );
        }
        else {
            return <div>Movie doesn't exist</div>;
        }
    }
}

const mapStateToProps =  (state) => ({
    movieDetails: state.movieDetails,
    relatedMovies: state.relatedMovies
});

const mapDispatchToProps = {
    loadMovieDetails
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MovieDetailsPageView));
