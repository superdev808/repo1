import { call, put, take, takeLatest, select, actionChannel } from 'redux-saga/effects';
import * as types from '../actions/actionTypes'
//import { API_BASE_URL, ENDPOINTS } from '../constants/apiEndpoints';
import { baseUrl } from '../../config'
import axios from 'axios';


export function* subscriberWatcher() {
    const subChannel = yield actionChannel(types.API_CALL_SUCCESS);
    while (true) {
        const action = yield take(subChannel);
        //yield call(fetchSubscriberDetails, action);
    }
}