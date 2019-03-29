import * as React from 'react';
import axios from 'axios';

function getMovies(search, searchBy, sortBy) {
    let params = [];

    if (search) {
        params.push(`search=${search}`);
    }

    if (searchBy) {
        params.push(`searchBy=${searchBy}`);
    }

    if (sortBy) {
        params.push(`sortBy=${sortBy}`);
        params.push('sortOrder=desc');
    }

    let request = 'https://reactjs-cdp.herokuapp.com/movies?' + params.join('&');
    return axios.get(request)
            .then(res => {
                console.log(res.data);
                return res.data;
            });
}

export default getMovies;

//?search=Fantasy&searchBy=genres
//?search=Star%20war&searchBy=title"
//?sortBy=rating&search=Fantasy&searchBy=genres"