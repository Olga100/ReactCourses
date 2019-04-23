import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';

import mainReducer from './Reducers/mainReducer';

const store = createStore(mainReducer, compose(applyMiddleware(thunkMiddleware) ));

export { store };
