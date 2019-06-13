import { call, put, take, actionChannel, takeLatest, all } from 'redux-saga/effects';
import * as types from '../actions/actionTypes'
//import { API_BASE_URL, ENDPOINTS } from '../constants/apiEndpoints';
import { baseUrl } from '../../config'
import axios from 'axios';

function* fetchAddPost(action) {
    try {
        console.log("post happen")
        const addedData = yield axios.post(`${baseUrl}`, action.data).then(response => response.data)
        console.log("??", addedData)
        yield put({ type: types.ADD_POST_SUCCESS, data: addedData })
    } catch (error) {
        yield put({ type: types.ADD_POST_FAIL })
    }
}

export function* addPost() {
    const subChannel = yield actionChannel(types.ADD_POST);
    while (subChannel) {
        const action = yield take(subChannel);
        yield call(fetchAddPost, action);
    }
}

export function* tempSaga() {
    yield all([
        takeLatest(types.ADD_POST, addPost),
    ])
}