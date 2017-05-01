import { combineReducers } from "redux"

import * as counter from '../components/Counter'
import * as testsnackbar from '../components/TestSnackbar'

export default combineReducers({
    counter: counter.reducers,
    testsnackbar: testsnackbar.reducers
})
