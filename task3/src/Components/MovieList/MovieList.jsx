import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './MovieList.scss';

import MovieThumbnail from './../../Components/MovieThumblail/MovieThumbnail';

class MovieList extends Component  {

    renderItems() {
        const movies = this.props.movies;

        if(movies && movies.length > 0) {
            return movies.map(function (item) {
                return (<MovieThumbnail key={item.id} movie={item}/>);
            });
        } else {
            return (<div className="noFilms">No films found</div>);
        }
    }

    render() {

        return (
            <div className="mainContainer">
                <div className="movieListContainer">
                    { this.renderItems() }
                </div>
            </div>
        )
    }
}

MovieList.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.object)
};

export default MovieList;
