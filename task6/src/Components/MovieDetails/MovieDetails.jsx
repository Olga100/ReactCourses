import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import './MovieDetails.scss';

class MovieDetails extends Component {


    /*renderGenres(arr) {
     return arr.map((item) => (<span className="genres" key={item}>{item}</span>));
     }*/

    renderPoster(movie) {
        if (movie) {
            return movie.poster_path;
        }
    }
    getDesctiption(movie) {
        if(movie){
            return movie.tagline;
        }
    }

    render() {
        //const {poster_path, title, release_date, genres} = this.props.movie;
        const movie = this.props.movie;
        console.log(movie);

        return (
            <div className="movieDetailsContainer">

                <div className="movieDetailsContainer-header">
                    <span className="neflixroulette">netflixroulette</span>
                    <Link to="/" className="redirect"> SEARCH</Link>
                </div>

                <div className="movieContainer">
                    <div className="moviePosterWrapper">
                        <img className="moviePoster" src={this.renderPoster(movie)} alt="poster"/>
                    </div>
                    <div className="movieInformation">
                        { this.getDesctiption(movie) }
                    </div>

                </div>
            </div>
        )
    }
}

/*MovieThumbnail.propTypes = {
 movie: PropTypes.object.isRequired
 };*/

export default MovieDetails;