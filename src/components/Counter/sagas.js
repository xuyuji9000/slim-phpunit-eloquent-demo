import { delay } from 'redux-saga'
import { put, takeEvery, call } from 'redux-saga/effects'
import * as constants from './consts'

function* helloSaga()
{
    console.log('hello saga.')
}

function* incrementAsync()
{
    yield call(delay, 1000)
    yield put({type: constants.INCREMENT})
}

export function* watchIncrementAsync()
{
    yield takeEvery(constants.INCREMENT_ASYNC, incrementAsync)
}

