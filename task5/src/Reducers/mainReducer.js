import * as actions from '../Actions/Actions';

export default function mainReducer(state = {}, action) {
    const newState = Object.assign({}, state);
    if(!newState.viewState) {
        newState.viewState = {};
    }

    if(action.type === actions.RECEIVE_MOVIES) {
        newState.viewState.movies = action.movies;
        return newState;
    }

    if(action.type === actions.SORT_BY) {
        newState.viewState.sortBy = action.field;
        return newState;
    }

    if(action.type === actions.SEARCH_BY) {
        newState.viewState.searchBy = action.field;
        return newState;
    }

    if(action.type === actions.SEARCH_TEXT) {
        newState.viewState.searchText = action.text;
        return newState;
    }

    return state;
}
