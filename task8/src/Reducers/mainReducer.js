import Immutable from 'immutable';

import {
  RECEIVE_MOVIES, SORT_BY, SEARCH_BY, SEARCH_TEXT, RECEIVE_MOVIE_DETAILS, RECEIVE_RELATED_MOVIES,
} from '../constants';


const initialState = Immutable.fromJS({
  movies: [],
  sortBy: 'release_date',
  searchBy: 'title',
  searchText: '',
});


export default function mainReducer(state = initialState, action) {
  const { type } = action;

  switch (type) {
    case RECEIVE_MOVIES:
      return state.set('movies', action.movies);
    case RECEIVE_MOVIE_DETAILS:
      return state.set('movieDetails', action.movieDetails);
    case RECEIVE_RELATED_MOVIES:
      return state.set('relatedMovies', action.movies);
    case SORT_BY:
      return state.set('sortBy', action.field);
    case SEARCH_BY:
      return state.set('searchBy', action.field);
    case SEARCH_TEXT:
      return state.set('searchText', action.text);
    default:
      return state;
  }
}


export const getQuery = (state) => {
  const { searchText, searchBy, sortBy } = state;
  const params = [];

  if (searchText) {
    params.push(`search=${searchText}`);
  }
  if (searchBy) {
    params.push(`searchBy=${searchBy}`);
  }
  if (sortBy) {
    params.push(`sortBy=${sortBy}`);
    params.push('sortOrder=desc');
  }
  return params.join('&');
};
