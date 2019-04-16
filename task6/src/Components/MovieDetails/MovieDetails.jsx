import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './MovieDetails.scss';

class MovieDetails extends Component {


    /*renderGenres(arr) {
        return arr.map((item) => (<span className="genres" key={item}>{item}</span>));
    }*/

    render() {
       // const {poster_path, title, release_date, genres} = this.props.movie;
        return (
            <div className="movieDetailsContainer">
                {/*<div className="poster"><img src={poster_path} alt="poster"/></div>
                <div className="title-year">
                    <div> {title}</div>
                    <span>{this.getYear(release_date)}</span>
                </div>
                <div>{this.renderGenres(genres)}</div>
*/}             THis is movieDetails
            </div>
        )
    }
}

/*MovieThumbnail.propTypes = {
    movie: PropTypes.object.isRequired
};*/

export default MovieDetails;