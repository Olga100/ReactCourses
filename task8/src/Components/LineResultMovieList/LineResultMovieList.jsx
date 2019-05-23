import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

//import './LineResultMovieList.scss';


const styles = {
    lineResultContainer: {
        display: 'flex',
        justifycontent: 'space-between',
        width: '100%',
        height: '20px',
        fontSize: '14px',
        fontWeight: 'bold',
        backgroundColor: '#f5f5f5'
    },
    sortByWrapper:{
        display: 'flex',
        width: '250px',
        justifyContent: 'space-around'
    },
    sortByWrapperSpan: {
            margin: '0 20px',
            cursor: 'pointer'
        },

    active: {
            color: '#c15d69'
        }
    }


const LineResultMovieList = ({moviesCount, sortBy, sortByChanged, classes}) => {
    const sortByReleaseDate = () => sortByChanged('release_date');
    const sortByRating = () => sortByChanged('vote_average');

    return moviesCount === null || sortBy === null
        ? null
        : <div className={classes.lineResultContainer}>
            <span>{moviesCount} movies found</span>
            <span className={classes.sortByWrapper}>
            <span className={classes.sortByWrapperSpan}>Sort by</span>
            <span
                id="sortByRelease"
                className={(sortBy === "release_date")?  classes.active  : null}
                onClick={sortByReleaseDate}
            >release date</span>
            <span
                  id="sortByRating"
                  className={(sortBy === "vote_average")?  classes.active  : null}
                  onClick={sortByRating}
            >rating</span>
            </span>
        </div>
};

LineResultMovieList.propTypes = {
    moviesCount: PropTypes.number,
    sortBy:  PropTypes.string,
    sortByChanged: PropTypes.func,
};

export default injectSheet(styles)(LineResultMovieList);
