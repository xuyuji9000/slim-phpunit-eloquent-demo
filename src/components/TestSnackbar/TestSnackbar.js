import React from 'react'
import PropTypes from 'prop-types'
import createReactClass from 'create-react-class'
import RaisedButton from 'material-ui/RaisedButton'
import Snackbar from 'material-ui/Snackbar'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as TestSnackbarActions from './actions'

let TestSnackbar = createReactClass({
    getInitialState: () => {
        return {
            open: false
        }
    },
    componentWillMount() {
        this.props.actions.helloSnackbar()
    },
    componentWillReceiveProps:nextProps =>
    {
        console.log(nextProps)
        // if(this.props.open != nextProps.open)
        // {
        //     this.setState({open: nextProps.open})
        // }
    },
    handleOpen: function() {
        this.setState({
            open: true
        })
        this.props.actions.openSnackbar()
    },
    handleClose: function() {
        this.setState({
            open: false
        })
        this.props.actions.closeSnackbar()
    },
    render: function() {
        console.log(this.props)
        return (
            <div>
                <RaisedButton
                    onTouchTap={this.handleOpen}
                    label='open Snackbar'
                >
                </RaisedButton>
                <Snackbar
                    open={this.state.open}
                    message='The Snackbar is working.'
                    autoHideDuration={3000}
                    onRequestClose={this.handleClose}
                    bodyStyle={{backgroundColor: '#FF8CB3'}}
                >
                </Snackbar>
            </div>
        )
    }
})

TestSnackbar.propTypes = {
    open: PropTypes.bool.isRequired,
    acitons: PropTypes.shape({
        helloSnackbar: PropTypes.func.isRequired,
        closeSnackbar: PropTypes.func.isRequired,
        openSnackbar: PropTypes.func.isRequired
    })
}

const mapStateToProps = state => ({
    open: state.testsnackbar.open
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(TestSnackbarActions, dispatch)
})

TestSnackbar = connect(mapStateToProps, mapDispatchToProps)(TestSnackbar)

export default TestSnackbar
