import React from 'react';
import {Field, reduxForm} from 'redux-form';
import submit from './submit';
import {renderField} from '../consts/Fields';

const SubmitValidationForm = props =>
{
    const {error, handleSubmit, pristine, submitting} = props;

    return(
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <Field 
                    component={renderField}
                    type="text"
                    label="Imię"
                    name ="imie"    
                />
                <button type="submit">Zapisz</button>
            </form>
        </div>
    )
}

const form = reduxForm({
    form: 'SubmitValidationForm'
})(SubmitValidationForm);

export default form;