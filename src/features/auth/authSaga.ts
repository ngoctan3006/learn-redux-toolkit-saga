import { PayloadAction } from '@reduxjs/toolkit';
import { fork, take, delay, call } from 'redux-saga/effects';
import { authActions, LoginPayload } from './authSlice';

function* handleLogin(payload: LoginPayload) {
  yield delay(1000);
  localStorage.setItem('access_token', 'fake_token');
  // redirect to admin page
}

function* handleLogout() {
  yield delay(500);
  localStorage.removeItem('access_token');
}

function* watchLoginFLow() {
  while (true) {
    const isLoggedIn = Boolean(localStorage.getItem('access_token'));
    if (!isLoggedIn) {
      const action: PayloadAction<LoginPayload> = yield take(authActions.login.type);
      yield fork(handleLogin, action.payload);
    }

    yield take(authActions.logout.type);
    yield call(handleLogout);
  }
}

export default function* authSaga() {
  yield fork(watchLoginFLow);
}
