import { delay } from 'redux-saga'
import { put, takeEvery, call  } from 'redux-saga/effects'
import * as actionTypes from './actionTypes'
import * as reducerTypes from './reducerTypes'

function* helloSnackbar()
{
    yield call(console.log,'Hello Snackbar')
}

function* openSnackbar()
{
    yield put({ type: reducerTypes.OPEN_SNACKBAR})
}

function* closeSnackbar()
{
    yield put({ type: reducerTypes.CLOSE_SNACKBAR })
}

export function* watchHelloSnackbar() 
{
    yield takeEvery(actionTypes.HELLO_SNACKBAR, helloSnackbar)
}

export function* watchOpenSnackbar()
{
    yield takeEvery(actionTypes.OPEN_SNACKBAR, openSnackbar)
}

export function* watchCloseSnackbar()
{
    yield takeEvery(actionTypes.CLOSE_SNACKBAR, closeSnackbar)
}
