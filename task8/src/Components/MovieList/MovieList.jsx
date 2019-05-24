// @flow

import React, { Component } from 'react';

import MovieThumbnail from './../../Components/MovieThumblail/MovieThumbnail';
import LineResultGenres from "../LineResultGenres/LineResultGenres";
import injectSheet from 'react-jss';
import type { Movie } from '../../types';

const styles = {
    mainContainer: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '390px',
        alignItems: 'center',
        justifyContent: 'center'
    },
    movieListContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignItems: 'center',
        fontSize: '18px'
    },

    noFilms: {
        fontSize: '45px'
    }
}

type Props = {
    movies: Array<Movie>,
    classes: { mainContainer: {}, movieListContainer: {} }
};

class MovieList extends Component<Props> {

    static defaultProps = {
        movies: []
    };

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

        const {classes} = this.props;
        return (
            <div className={classes.mainContainer}>
                <div className={classes.movieListContainer}>
                    { this.renderItems() }
                </div>
            </div>)
    }
}

export default injectSheet(styles)(MovieList);
