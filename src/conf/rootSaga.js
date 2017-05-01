import { fork } from 'redux-saga/effects'
import * as counter from  '../components/Counter'
import * as testsnackbar from '../components/TestSnackbar'

export default function* rootSaga()
{
    let sagas = new Array()

    sagas = sagas.concat(Object.values(counter.sagas))
    sagas = sagas.concat(Object.values(testsnackbar.sagas))

    yield sagas
}
