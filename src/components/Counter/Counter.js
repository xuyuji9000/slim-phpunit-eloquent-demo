/*eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as consts from './consts'

const Counter = ({ value, onIncrementAsync }) =>
    <div>
        {' '}
        <button onClick={onIncrementAsync}>Increment after 1 second</button>
        <hr />
        <div>Clicked: {value} times</div>
        
    </div>

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrementAsync: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
        value: state.counter
    }
}


const mapDispatchToProps = (dispatch) => {
    const action = type => dispatch({type})
    return {
        onIncrementAsync: ()=> action(consts.INCREMENT_ASYNC)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)
