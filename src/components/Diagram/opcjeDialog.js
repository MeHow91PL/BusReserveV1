import {connect} from 'react-redux'
import React from 'react'
import {ukryjOpcje} from '../../actions/actions'
import {reduxForm, Field} from 'redux-form'
import {renderField} from '../../consts/Fields'

let OpcjeForm = ()=>(
    <form> 
        <Field  component={renderField} type="text" label="test" name="test" />
    </form>
)

OpcjeForm = reduxForm({form: 'opcjeForm'})(OpcjeForm);

const OpcjeDialog = ({show, hideDialog}) => {
    console.log(show);

    return (
        <div style={{display: show}} className='modalDialog'
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
