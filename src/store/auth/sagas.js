import {put, call, takeEvery, all, select, fork} from 'redux-saga/effects';
import {
    getTokenSuccess,
    getToken,
    getTokenError,
    refreshTokenSuccess,
    refreshTokenError,
    logoutSuccess
} from './actions';
import {oauth2, accessToken} from '../../service/apiOAuth';




export default function* watchAuth() {
    yield all([
        takeEvery('LOGIN', getTokenAsync),
        takeEvery('REFRESH_TOKEN', refreshTokenAsync),
        takeEvery('LOGOUT', revokeTokenAsync)
    ])
}


export function* getTokenAsync(action) {
    try {
        yield put(getToken());
        const data = yield call(() => {
            const tokenConfig = {
              username: action.payload.username,
              password: action.payload.password,
              scope: 'read write',
            };

            return oauth2.ownerPassword.getToken(tokenConfig);
          }
        );
        const { token } = oauth2.accessToken.create(data);
        yield put(getTokenSuccess(token));
      } catch (error) {
        yield put(getTokenError());
      }
}


export function* refreshTokenAsync() {
    try {
        const state = yield select();
        const currentToken = accessToken(state.auth.token);
        const data = yield call(() => {
            return currentToken.refresh();
          }
        );
        const { token } = data;
        yield put(refreshTokenSuccess(token));
      } catch (error) {
            yield put(refreshTokenError());
            yield fork(revokeTokenAsync)
      }
}


export function* revokeTokenAsync() {
    try {
        const state = yield select();
        const currentToken = accessToken(state.auth.token);
        yield call(() => {
            return currentToken.revokeAll();
          }
        );
        yield put(logoutSuccess());
      } catch (error) {
        console.log(error)
      }
}

