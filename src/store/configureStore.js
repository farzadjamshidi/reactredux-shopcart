import { createStore } from 'redux';
import counterReducer from '../reducers/counterReducer';

const configureStore = (defaultState) => {

    const store = createStore (counterReducer, defaultState);
    return store;
}

export default configureStore;