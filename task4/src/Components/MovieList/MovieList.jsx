import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './MovieList.scss';

import MovieThumbnail from './../../Components/MovieThumblail/MovieThumbnail';


const MovieList = ({ movies }) => {

    const renderItems = () => {
        if (movies && movies.length > 0) {
            return movies.map(function (item) {
                return (<MovieThumbnail key={item.id} movie={item}/>);
            });
        } else {
            return (<div className="noFilms">No films found</div>);
        }
    };

    return (
        <div className="mainContainer">
            <div className="movieListContainer">
                { renderItems() }
            </div>
        </div>
    )

};

MovieList.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.object)
};

export default MovieList;
