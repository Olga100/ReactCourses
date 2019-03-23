import * as React from 'react';
import axios from 'axios';

function testApi() {
    return axios.get( `https://reactjs-cdp.herokuapp.com/movies`)
            .then(res => {
                console.log(res.data);
                return res.data;
            })
}

export default testApi;