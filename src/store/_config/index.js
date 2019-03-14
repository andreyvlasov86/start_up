import { combineReducers, createStore, applyMiddleware } from 'redux';
import auth from '../auth/reducers';
import dogs from '../dogs/reducers';
import createSagaMiddleware from "redux-saga";



export const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
    combineReducers({
        auth,
        dogs,
    }),
    applyMiddleware(sagaMiddleware)
);