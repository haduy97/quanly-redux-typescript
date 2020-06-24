import { all, put, call, delay, takeLatest } from 'redux-saga/effects';
import { fetchList } from '../../services';
import { GET_USER } from '../types';
import { getUserSuccess } from '../action/actions';

// const delay = (giay:number) => new Promise(res => setTimeout(res,giay));
 
function* handleGetUsers() {
    try {
        const users = yield call(fetchList);
        yield delay(1000);
        yield put(getUserSuccess(users));
    } catch (error) {
        console.log(error.toString(), "ERROR-GetUsers-SAGA");
    }
}
function* watchGetUsers() {
    yield takeLatest(GET_USER, handleGetUsers)
}

export function* imagesSaga() {
    yield all([
        watchGetUsers()
    ])
}
