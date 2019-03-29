import React from 'react';
import './LineResultMovieList.scss';

const LineResultMovieList = ({moviesCount, sortBy, sortByChanged}) => {
    if(moviesCount  != null &&  sortBy  != null) {
        return (
        <div className="lineResultContainer">
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
        )
    } else {
        return (<div className="lineResultContainer" />)
    }
};

export default LineResultMovieList;