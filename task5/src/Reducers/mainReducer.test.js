import * as actions from '../Actions/Actions';
import {mainReducer} from './mainReducer';
import movies from '../mocks/movies.json';

describe('reducer mainReducer', () => {

    it('should handle RECEIVE_MOVIES', () => {
        const successAction = {
            type: actions.RECEIVE_MOVIES,
            movies: movies
        };
        expect(mainReducer({}, successAction).viewState.movies).toEqual(movies);
    });

    it('should handle SORT_BY', () => {
        const sortField = 'test_field';

        const successAction = {
            type: actions.SORT_BY,
            field: sortField
        };

        expect(mainReducer({}, successAction).viewState.sortBy).toEqual(sortField);
    });

    it('should handle SEARCH_BY', () => {
        const searchField = 'test_field';

        const successAction = {
            type: actions.SEARCH_BY,
            field: searchField
        };

        expect(mainReducer({}, successAction).viewState.searchBy).toEqual(searchField);
    });

    it('should handle SEARCH_TEXT', () => {
        const text = 'test_field';

        const successAction = {
            type: actions.SEARCH_TEXT,
            text: text
        };

        expect(mainReducer({}, successAction).viewState.searchText).toEqual(text);
    });
});