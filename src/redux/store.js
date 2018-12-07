import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';

import searchReducer from './reducers/searchReducer';
import gitReducer from './reducers/gitReducer';
import navigationReducer from './reducers/navigationReducer';

import saga from '../saga';

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
    search: searchReducer,
    git: gitReducer,
    navigation: navigationReducer
});

export const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(saga)

export default store; 