import { all, fork, put, takeLatest } from 'redux-saga/effects';
import { subscriberSaga } from './sagas/tempSaga';
import * as types from './actions/actionTypes';
export default function* rootSaga() {
    yield all([
        //subscriberWatcher(),
    ]);
}