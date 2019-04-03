import React from 'react';
import PropTypes from 'prop-types';

import './LineResultMovieList.scss';

const LineResultMovieList = ({moviesCount, sortBy, sortByChanged}) => {
    const handleSortByDate = () => sortByChanged('release_date');
    const handleSortByVote = () => sortByChanged('vote_average');

    return moviesCount === null || sortBy === null
        ? null
        : <div className="lineResultContainer">
            <span>{moviesCount} movies found</span>
            <span className="sortByWrapper">
            <span>Sort by</span>
            <span
                id="sortByRelease"
                className={(sortBy === "release_date")? "active" : null}
                onClick={handleSortByDate}
            >release date</span>
            <span
                id="sortByRating"
                  className={(sortBy === "vote_average")? "active" : null}
                  onClick={handleSortByVote}
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
