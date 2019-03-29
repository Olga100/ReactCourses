import React, { Component } from 'react';

import './MovieList.scss';

import MovieThumbnail from './../../Components/MovieThumblail/MovieThumbnail';

class MovieList extends Component  {

    renderItems() {
        if(this.props.movies && this.props.movies.length > 0) {
            return this.props.movies.map(function (item) {
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

export default MovieList;
