import {connect} from 'react-redux'
import React from 'react'
import {ukryjOpcje} from '../../actions/actions'
import {renderField} from '../../consts/Fields'
import {Field, reduxForm} from 'redux-form'

let OpcjeForm = () => {
    return(
        <div>
            <form>
                <Field 
                    component={renderField} type="text" label="test" name="test1"
                />
            </form>
        </div>
    )
}

OpcjeForm = reduxForm({form:'OpcjeForm'})(OpcjeForm);

const OpcjeDialog = ({show, hideDialog}) => {
    console.log(show);

    return (
        <div style={{display: show}}
            className='modalDialog'
            onClick={hideDialog}>
            <div onClick={(e) => {e.stopPropagation();}}>
                <OpcjeForm />
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({show: state.Opcje.show})

const mapDispatchToProps = {
    hideDialog: ukryjOpcje
}

export default connect(mapStateToProps, mapDispatchToProps)(OpcjeDialog)
