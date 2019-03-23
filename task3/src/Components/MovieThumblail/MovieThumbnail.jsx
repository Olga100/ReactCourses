import React, {Component} from 'react';
import './MovieThumbnail.scss';

class MovieThumbnail extends Component {
    render() {
        const movie = this.props.movie;
        return (
            <div className="movieThumbnailContainer">
                <div className="poster">{this.props.movie.poster_path}</div>
                <div className="title-year">
                    <span> {this.props.movie.title}</span>
                    <span>{this.props.movie.release_date}</span>
                </div>
                <div>{this.props.movie.genres}</div>

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
