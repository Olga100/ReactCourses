import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import './MovieList.scss';
import { selectedMovie } from '../../Actions/Actions';
import MovieThumbnail from './../../Components/MovieThumblail/MovieThumbnail';

class MovieListView extends Component {
    constructor(props) {
        super(props);

    }

   /* handleGetMovie = (item) => {
        if(item) {
            console.log(item);
        }
    };*/

    renderItems = () => {
        const {movies, handleSelectedMovie} = this.props;

        if (movies && movies.length > 0) {
            return movies.map(function (item) {
                return (<MovieThumbnail key={item.id} movie={item} onMovieSelected={(movie) => handleSelectedMovie(movie)} />);
            });
        } else {
            return (<div className="noFilms">No films found</div>);
        }
    };

    render() {
        const { movies, sortBy, searchBy, searchText, searchByChanged, searchTextChanged }  = this.props;

        return (
        <div className="mainContainer">
            <div className="movieListContainer">
                { this.renderItems() }
            </div>
        </div>
    )}
}

MovieListView.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.object)
};


const mapDispatchToProps = {
    handleSelectedMovie: selectedMovie
};

const MovieList = connect(null, mapDispatchToProps)(MovieListView);

export default MovieList;
