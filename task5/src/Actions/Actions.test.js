import * as actions from './Actions';
import * as types from './Actions';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expect from 'expect';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions', () => {

    it('should create an action to select a field "rating" for sorting', () => {
        const field = 'rating';
        const expectedAction = {
            type: types.SORT_BY,
            field
        };
        expect(actions.sortBy(field)).toEqual(expectedAction)
    });

    it('should create an action to select a field "genres" for searhing', () => {
        const field = 'genres';
        const expectedAction = {
            type: types.SEARCH_BY,
            field
        };
        expect(actions.searchBy(field)).toEqual(expectedAction)
    });
});

