import axios from 'axios';
import {
  RECEIVE_MOVIES, RECEIVE_MOVIE_DETAILS, RECEIVE_RELATED_MOVIES, SORT_BY, SEARCH_BY, SEARCH_TEXT,
} from '../constants';
import { getMovie, getMoviesByGenres } from '../api';


export function receiveMovies(movies) {
  return {
    type: RECEIVE_MOVIES,
    movies,
  };
}

export function receiveMovieDetails(movieDetails) {
  return {
    type: RECEIVE_MOVIE_DETAILS,
    movieDetails,
  };
}

export function receiveRelatedMovies(movies) {
  return {
    type: RECEIVE_RELATED_MOVIES,
    movies,
  };
}

export function loadMovies(query) {
  return dispatch => axios.get(`https://reactjs-cdp.herokuapp.com/movies?${query}`)
    .then(response => dispatch(receiveMovies(response.data.data)));
}

export function loadMovieDetails(movieId) {
  return dispatch => getMovie(movieId)
    .then((movieDetails) => {
      dispatch(receiveMovieDetails(movieDetails));
      getMoviesByGenres(movieDetails.genres)
        .then(movies => dispatch(receiveRelatedMovies(movies)));
    });
}

export function sortBy(field) {
  return {
    type: SORT_BY,
    field: field || 'release_date',
  };
}

export function searchBy(field) {
  return {
    type: SEARCH_BY,
    field: field || 'title',
  };
}

export function searchText(text) {
  return {
    type: SEARCH_TEXT,
    text: text || '',
  };
}
