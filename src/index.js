import React from 'react'
import { render } from 'react-dom'
import {Provider} from 'react-redux'
import App from './components/App/App';
import 'bootstrap'
import watchFetchDog from "./store/dogs/sagas";
import watchAuth from "./store/auth/sagas";
import {store, sagaMiddleware} from "./store/_config";


sagaMiddleware.run(watchFetchDog);
sagaMiddleware.run(watchAuth);


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);