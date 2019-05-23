// @flow

import React from 'react';


import './LineResultGenres.scss';

type Props = {
    genres: Array<string>
};


const LineResultGenres = ({genres}: Props) => {
    return genres === null
        ? <div className="lineResultGenresContainer">Films by unknown genre</div>
        : <div className="lineResultGenresContainer">Films by {genres.join(', ')} genres</div>
};

LineResultGenres.defaultProps = {
    genres: null
};

export default LineResultGenres;
