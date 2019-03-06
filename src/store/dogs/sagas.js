import {put, call, takeEvery} from 'redux-saga/effects';
import {requestDogSuccess, requestDog, requestDogError} from './actions'



export default function* watchFetchDog() {
  yield takeEvery('FETCHED_DOG', fetchDogAsync);
}

export function* fetchDogAsync() {
  try {
    yield put(requestDog());
    const data = yield call(() => {
      return fetch('https://dog.ceo/api/breeds/image/random')
              .then(res => res.json())
      }
    );
    yield put(requestDogSuccess(data));
  } catch (error) {
    yield put(requestDogError());
  }
}
