import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from '../reducers';
import { load_authors } from '../actions/actions-types';

const hydrateState = {
    author: {
        authors: [],
        books: [],
        choices: [],
        choice: '',
        options: new Map([['fnac', 'Fnac'], ['eyrolles', 'Eyrolles'], ['gibert-jeune', 'Gibert Jeune']])
    }
}
const configureStore = (preloadedState = hydrateState) => {
    const middlewares = [thunkMiddleware];
    const middlewareEnhancer = applyMiddleware(...middlewares);

    const store = createStore(rootReducer, preloadedState, middlewareEnhancer);

    store.dispatch(load_authors());

    return store;
}

export default configureStore;