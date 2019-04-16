import {RECEIVE_MOVIES, SORT_BY, SEARCH_BY, SEARCH_TEXT} from'../constants';

const initialState = {
    movies: [],
    sortBy: 'release_date',
    searchBy: 'title',
    searchText: ""
};

export default function mainReducer(state = initialState, action) {
    const { type } = action;

    switch (type) {
        case RECEIVE_MOVIES:
            return {...state, movies: action.movies};
        case SORT_BY:
            return {...state, sortBy: action.field};
        case SEARCH_BY:
            return {...state, searchBy: action.field};
        case SEARCH_TEXT:
            return {...state, searchText: action.text};
        default:
            return state;
    }
}

export const getQuery = state => {
    let {searchText, searchBy, sortBy} = state;
    let params = [];

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
    return 'https://reactjs-cdp.herokuapp.com/movies?' + params.join('&');
};
