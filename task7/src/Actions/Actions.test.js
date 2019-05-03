import * as actions from './Actions';
import {SORT_BY, SEARCH_BY} from'../constants';

describe('actions', () => {
    it('should create an action to select a field "rating" for sorting', () => {
        const field = 'rating';
        const expectedAction = {
            type: SORT_BY,
            field
        };
        expect(actions.sortBy(field)).toEqual(expectedAction)
    });

    it('should create an action to select a field "genres" for searhing', () => {
        const field = 'genres';
        const expectedAction = {
            type: SEARCH_BY,
            field
        };
        expect(actions.searchBy(field)).toEqual(expectedAction)
    });
});
