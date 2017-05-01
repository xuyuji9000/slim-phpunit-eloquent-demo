import * as actionTypes from './actionTypes'

export function helloSnackbar()
{
    return {
        type: actionTypes.HELLO_SNACKBAR
    }
}

export function openSnackbar()
{
    return {
        type: actionTypes.OPEN_SNACKBAR
    }
}

export function closeSnackbar()
{
    return {
        type: actionTypes.CLOSE_SNACKBAR
    }
}
