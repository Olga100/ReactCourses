import {
  RECEIVE_MOVIES, SORT_BY, SEARCH_BY, SEARCH_TEXT,
} from '../constants';
import mainReducer from './mainReducer';
import movies from '../mocks/movies.json';

describe('reducer mainReducer', () => {
  it('should handle RECEIVE_MOVIES', () => {
    const successAction = {
      type: RECEIVE_MOVIES,
      movies,
    };
    expect(mainReducer({}, successAction).movies).toEqual(movies);
  });

  it('should handle SORT_BY', () => {
    const sortField = 'test_field';

    const successAction = {
      type: SORT_BY,
      field: sortField,
    };

    expect(mainReducer({}, successAction).sortBy).toEqual(sortField);
  });

  it('should handle SEARCH_BY', () => {
    const searchField = 'test_field';

    const successAction = {
      type: SEARCH_BY,
      field: searchField,
    };

    expect(mainReducer({}, successAction).searchBy).toEqual(searchField);
  });

  it('should handle SEARCH_TEXT', () => {
    const text = 'test_field';

    const successAction = {
      type: SEARCH_TEXT,
      text,
    };

    expect(mainReducer({}, successAction).searchText).toEqual(text);
  });
});
