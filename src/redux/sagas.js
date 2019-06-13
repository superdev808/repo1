import { all } from 'redux-saga/effects';
import { addPost } from './sagas/tempSaga';
export default function* rootSaga() {
    yield all([
        addPost(),
    ]);
}