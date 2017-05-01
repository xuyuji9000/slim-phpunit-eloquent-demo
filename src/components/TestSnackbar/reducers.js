import * as reducerTypes from './reducerTypes'

export default function testsnackbar(state={open: false}, action)
{
    switch(action.type) {
        case reducerTypes.OPEN_SNACKBAR: {
            return {
                ...state,
                open: true
            }
            break
        }
        case reducerTypes.CLOSE_SNACKBAR: {
            return {
                ...state,
                open: false
            }
            break
        }
        default:
            return state
    }
}
