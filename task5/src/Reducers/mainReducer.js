import * as actions from '../Actions/Actions';

export function mainReducer(state = {}, action) {

    if(action.type === actions.RECEIVE_MOVIES) {
        const newState = Object.assign({}, state);
        newState.viewState.movies = action.movies;
        return newState;
    }

    if(action.type === actions.SORT_BY) {
        const newState = Object.assign({}, state);
        newState.viewState.sortBy = action.field;
        return newState;
    }

    if(action.type === actions.SEARCH_BY) {
        const newState = Object.assign({}, state);
        newState.viewState.searchBy = action.field;
        return newState;
    }

    if(action.type === actions.SEARCH_TEXT) {
        const newState = Object.assign({}, state);
        newState.viewState.searchText = action.text;
        return newState;
    }

    return state;
}
