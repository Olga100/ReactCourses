// @flow

import React, { Component } from 'react';

import './MovieList.scss';
import MovieThumbnail from './../../Components/MovieThumblail/MovieThumbnail';
import LineResultGenres from "../LineResultGenres/LineResultGenres";

type Props = {
    movies: Array<object>
};

class MovieList extends Component<Props> {
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

MovieLists.defaultProps = {
    movies: null
};

export default MovieList;
