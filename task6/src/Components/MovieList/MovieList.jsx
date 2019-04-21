import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import './MovieList.scss';
import MovieThumbnail from './../../Components/MovieThumblail/MovieThumbnail';

class MovieList extends Component {
    constructor(props) {
        super(props);
    }

    renderItems = () => {
        const {movies} = this.props;

        if (movies && movies.length > 0) {
            return movies.map(function (item) {
                return (<MovieThumbnail key={item.id} movie={item} />);
            });
        } else {
            return (<div className="noFilms">No films found</div>);
        }
    };

    render() {
        return (
            <div className="mainContainer">
                <div className="movieListContainer">
                    { this.renderItems() }
                </div>
            </div>)
    }
}

MovieList.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.object)
};

export default MovieList;
