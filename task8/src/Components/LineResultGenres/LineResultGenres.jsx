// @flow

import React from 'react';
import injectSheet from "react-jss";

const styles = {
    lineResultGenresContainer: {
        display: 'flex',
        alignItems: 'center',
        height: '30px',
        paddingLeft: '50px',
        fontWeight: 600,
        backgroundColor: '#f5f5f5'
    }
};


type Props = {
    genres: Array <string>,
    classes: { lineResultGenresContainer: {} }
};


const LineResultGenres = ({genres, classes}: Props) => {
    return genres === null
        ? <div className={classes.lineResultGenresContainer}>Films by unknown genre</div>
        : <div className={classes.lineResultGenresContainer}>Films by {genres.join(', ')} genres</div>
};

LineResultGenres.defaultProps = {
    genres: []
};

export default injectSheet(styles)(LineResultGenres);
