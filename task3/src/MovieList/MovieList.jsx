import React, { Component } from 'react';

import './MovieList.scss';


import LineResultMovieList from './../Components/LineResultMovieList/LineResultMovieList';


class MovieList extends Component  {
    constructor(props) {
        super(props);
        this
    }

    renderItems() {

        if(this.props.movies) {
        return this.props.movies.map(function (item) {
            return (<MovieThumbnail key={item.id} movie={item}/>);
        });
    } else {
            return (<div className="noFilms">No films found</div>)
        }
    }


    render() {
        if (this.props.error === 5) {
            // Simulate a JS error
            throw new Error('I crashed!');
        }
        return (
            <div className="mainContainer">
                <LineResultMovieList countMovies = {null} sortBy = {null} />
                <div className="movieListContainer">
                    { this.renderItems() }
                </div>
            </div>
        )
    }
}


export default MovieList;
