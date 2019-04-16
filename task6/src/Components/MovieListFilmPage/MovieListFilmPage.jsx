import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './MovieListFilmPage.scss';

import MovieThumbnail from './../../Components/MovieThumblail/MovieThumbnail';


const MovieListFilmPage = ({ movies }) => {

   /* const renderItems = () => {
        if (movies && movies.length > 0) {
            return movies.map(function (item) {
                return (<MovieThumbnail key={item.id} movie={item}/>);
            });
        } else {
            return (<div className="noFilms">No films found</div>);
        }
    };*/

    return (
        <div className="movieListFilmPageContainer">
            MovieListFilmPage
        </div>
    )

};

MovieListFilmPage.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.object)
};

export default MovieListFilmPage;