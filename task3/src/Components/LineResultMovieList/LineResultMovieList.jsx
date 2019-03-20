import React from 'react';
import './LineResultMovieList.scss';

const LineResultMovieList = ({countMovies, sortBy}) => {
    if( countMovies  != null &&  sortBy  != null) {
        console.log(countMovies);
        return (
        <div className="lineResultContainer">
            <span>{countMovies} movies found</span>
            <span> Sort by  {sortBy}</span>
        </div>
        )
    } else {
        console.log("lllll")
        return (<div className="lineResultContainer"></div>)
    }
};




export default LineResultMovieList;