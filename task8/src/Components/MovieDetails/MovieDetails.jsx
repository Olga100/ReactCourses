// @flow

import React, {Component} from 'react';
import {Link} from 'react-router-dom';


import './MovieDetails.scss';

type Props = {
    movie: object
};

class MovieDetails extends Component<Props> {

    getYear(isoDate: string) {
        return new Date(isoDate).getFullYear();
    }

    getRunTime(runtime: string) {
        if(runtime) {
            return runtime + " " + "min";
        }
    }
    render() {
        const {poster_path, title, tagline, release_date, runtime, overview} = this.props.movie;

        return (
            <div className="movieDetailsContainer">

                <div className="movieDetailsContainer-header">
                    <span className="neflixroulette">netflixroulette</span>
                    <Link to="/" className="redirect"> SEARCH</Link>
                </div>

                <div className="movieContainer">
                    <div className="moviePosterWrapper">
                        <img className="moviePoster" src={poster_path} alt="poster"/>
                    </div>

                    <div className="movieInformation">
                        <div className="titleMovieContanier"> {title} </div>
                        <div className="titleMovieTagline"> {tagline} </div>
                        <div className="releaseContinues">
                            <span className="filmTime">{this.getYear(release_date)}</span>
                            <span className="filmRunTime">{this.getRunTime(runtime)} </span>
                        </div>
                        <div className="description">{overview}</div>
                    </div>
                </div>
            </div>
        )
    }
}

MovieDetails.defaultProps = {
    movie: null
};

/*MovieDetails.propTypes = {
 movie: PropTypes.object.isRequired
 };*/

export default MovieDetails;