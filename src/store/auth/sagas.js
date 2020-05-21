import { takeLatest, put, all } from 'redux-saga/effects'
import * as actions from './actions'

function* logIn({ payload: { username, password } }) {
  try {
    console.log(username, password)
    yield put(actions.logInSuccess())
  } catch (e) {
    yield put(actions.logInFailure(e))
  }
}

export default function* () {
  yield all([takeLatest(actions.LOG_IN_REQUEST, logIn)])
}
