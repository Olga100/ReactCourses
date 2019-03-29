import React, {Component} from 'react';
import './MovieThumbnail.scss';

class MovieThumbnail extends Component {

    getYear(isoDate) {
        return new Date(isoDate).getFullYear();
    }

    renderGenres(arr) {
        return arr.map((item) => (<span className="genres" key={item}>{item}</span>));
    }

    render() {
        const movie = this.props.movie;
        return (
            <div className="movieThumbnailContainer">
                <div className="poster"><img src={movie.poster_path} alt="poster"/></div>
                <div className="title-year">
                    <div> {movie.title}</div>
                    <span>{this.getYear(movie.release_date)}</span>
                </div>
                <div>{this.renderGenres(movie.genres)}</div>

            </div>
        )
    }
}

export default MovieThumbnail;


/*{
    "id": 0,
    "title": "string",
    "tagline": "string",
    "vote_average": 0,
    "vote_count": 0,
    "release_date": "string",
    "poster_path": "string",
    "overview": "string",
    "budget": 0,
    "revenue": 0,
    "runtime": 0,
    "genres": [
    "string"
]
}*/
