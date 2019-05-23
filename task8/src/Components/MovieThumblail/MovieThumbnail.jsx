// @flow
import React, {Component} from 'react';
import type {Node} from 'react';
import {Link} from 'react-router-dom';

import './MovieThumbnail.scss';

type Props = {
    movie: {
        id: number,
        title: string,
        poster_path: string,
        release_date: string,
        genres: Array<string>
    }
};

class MovieThumbnail extends Component<Props> {

    getYear(isoDate: string) {
        return new Date(isoDate).getFullYear();
    }

    renderGenres(arr: Array<string>): Node {
        return arr.map<Node>((item) => (<span className="genres" key={item}>{item}</span>));
    }

    render() {
        const {poster_path, title, release_date, genres} = this.props.movie;

        return (
            <div className="movieThumbnailContainer">
                <Link to={"/film/" + this.props.movie.id} className="link-wrapper">
                    <div className="poster"><img src={poster_path} alt="poster"/></div>
                    <div className="title-year">
                        <div> {title}</div>
                        <span>{this.getYear(release_date)}</span>
                    </div>
                    <div>{this.renderGenres(genres)}</div>
                </Link>
            </div>

        )
    }
}

export default MovieThumbnail;
