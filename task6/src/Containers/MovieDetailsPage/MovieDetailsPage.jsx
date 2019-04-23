import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';

import ErrorBoundary from '../../Components/ErrorBoundary';
import MovieDetails from '../../Components/MovieDetails/MovieDetails';
import MovieList from '../../Components/MovieList/MovieList';
import LineResultGenres from '../../Components/LineResultGenres/LineResultGenres';
import './MovieDetailsPage.scss';

import { loadMovieDetails } from '../../Actions/Actions';

class MovieDetailsPageView extends Component {

    componentDidMount() {
        this.props.loadMovieDetails(this.props.match.params.id);
    }

    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            this.props.loadMovieDetails(this.props.match.params.id);
        }
    }

    render() {
        const {movieDetails, relatedMovies} = this.props;

        if (movieDetails) {
            return (
                <div className="App">
                    <ErrorBoundary>
                        <div className="filmPageContainer">
                            <MovieDetails movie={movieDetails}/>
                            <LineResultGenres genres={movieDetails.genres}/>
                            <MovieList movies={relatedMovies} />
                        </div>
                    </ErrorBoundary>
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

const MovieDetailsPage = withRouter(connect(mapStateToProps, mapDispatchToProps)(MovieDetailsPageView));

export default MovieDetailsPage;