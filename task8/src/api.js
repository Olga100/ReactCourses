import axios from 'axios';

export function getMovies(search, searchBy, sortBy) {
  const params = [];

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

  const request = `https://reactjs-cdp.herokuapp.com/movies?${params.join('&')}`;

  return axios.get(request)
    .then(res => res.data);
}

export function getMovie(id) {
  return axios.get(`https://reactjs-cdp.herokuapp.com/movies/${id}`)
    .then(res => res.data);
}

export function getMoviesByGenres(genres) {
  return axios.get(`https://reactjs-cdp.herokuapp.com/movies?searchBy=genres&filter=${genres}`)
    .then(res => res.data.data);
}
