import React from 'react';
import PropTypes from 'prop-types';

import './LineResultGenres.scss';

const LineResultGenres = ({genres}) => {
    return genres === null
        ? <div className="lineResultGenresContainer">Films by unknown genre</div>
        : <div className="lineResultGenresContainer">Films by {genres.join(', ')} genres</div>
};

LineResultGenres.propTypes = {
    genres: PropTypes.array,
};

export default LineResultGenres;
