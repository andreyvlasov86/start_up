import React from 'react'
import { render } from 'react-dom'
import {Provider} from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './store/_config'
import App from './components/App/App';
import 'bootstrap'
import './index.css'
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