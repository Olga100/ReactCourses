import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './MovieThumbnail.scss';

class MovieThumbnail extends Component {

    getYear(isoDate) {
        return new Date(isoDate).getFullYear();
    }

    renderGenres(arr) {
        return arr.map((item) => (<span className="genres" key={item}>{item}</span>));
    }

    render() {
        const {poster_path, title, release_date, genres} = this.props.movie;
        const onMovieSelected = this.props.onMovieSelected;

        return (
            <div className="movieThumbnailContainer" onClick={() => onMovieSelected(this.props.movie)}>
                <div className="poster"><img src={poster_path} alt="poster"/></div>
                <div className="title-year">
                    <div> {title}</div>
                    <span>{this.getYear(release_date)}</span>
                </div>
                <div>{this.renderGenres(genres)}</div>

            </div>
        )
    }
}

MovieThumbnail.propTypes = {
    movie: PropTypes.object.isRequired,
    onMovieSelected: PropTypes.func
};

export default MovieThumbnail;
