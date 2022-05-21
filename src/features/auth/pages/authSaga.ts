import { PayloadAction } from '@reduxjs/toolkit';
import { fork, take } from 'redux-saga/effects';
import { LoginPayload, authActions } from './../authSlice';

function* handleLogin(payload: LoginPayload) {
  console.log('handleLogin', payload);
}

function* handleLogout() {
  console.log('handleLogout');
}

function* watchLoginFLow() {
  while (true) {
    const action: PayloadAction<LoginPayload> = yield take(authActions.login.type);
    yield fork(handleLogin, action.payload);

    yield take(authActions.logout.type);
    yield fork(handleLogout);
  }
}

export default function* authSaga() {
  yield fork(watchLoginFLow);
}
