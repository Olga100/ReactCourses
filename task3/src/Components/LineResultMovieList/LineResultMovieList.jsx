import React from 'react';
import PropTypes from 'prop-types';

import './LineResultMovieList.scss';

const LineResultMovieList = ({moviesCount, sortBy, sortByChanged}) => {
    return moviesCount === null || sortBy === null
        ? null
        : <div className="lineResultContainer">
            <span>{moviesCount} movies found</span>
            <span className="sortByWrapper">
            <span>Sort by</span>
            <span
                className={(sortBy === "release_date")? "active" : null}
                onClick={() => sortByChanged("release_date")}
            >release date</span>
            <span className={(sortBy === "vote_average")? "active" : null}
                  onClick={() => sortByChanged("vote_average")}
            >rating</span>
            </span>
        </div>
};

LineResultMovieList.propTypes = {
    moviesCount: PropTypes.number.isRequired,
    sortBy:  PropTypes.string.isRequired,
    sortByChanged: PropTypes.func,
};

export default LineResultMovieList;