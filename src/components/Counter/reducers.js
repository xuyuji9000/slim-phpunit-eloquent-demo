import * as consts from './consts'

export default function counter(state = 0, action) {
  switch (action.type) {
    case consts.INCREMENT: {
        return state + 1
        break
    }
    case consts.INCREMENT_IF_ODD: {
        return (state % 2 !== 0) ? state + 1 : state
        break
    }
    case consts.DECREMENT: {
        return state - 1
        break
    }
    default:
      return state
  }
}

