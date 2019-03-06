import React from 'react'
import { render } from 'react-dom'
import {Provider} from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import App from './components/App'
import 'bootstrap'
import './assets/css/index.css'
import createSagaMiddleware from 'redux-saga';
import watchFetchDog from "./store/dogs/sagas";


const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchFetchDog);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);