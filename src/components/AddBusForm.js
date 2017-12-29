import React from 'react';
import {reduxForm, Field} from 'redux-form';

import {renderField} from '../consts/Fields';

const Required = value => (value ? undefined : 'To pole jest wymagane');
const maxVal = max => value => (max < value ? `Wartość nie może być większa niż ${max}`: undefined);
const minVal = min => value => (min > value ? `Wartość nie może być mniejsza niż ${min}`: undefined);

const max100 = maxVal(100);
const min0 = minVal(0);

const AddBusForm = props =>
{
    const {handleSubmit, pristine} = props;
    const TempSub =(e) => {
        e.preventDefault();
    }
    
    return(
        <div>
            <form onSubmit={handleSubmit}>
            <Field
                    type="text"
                    component={renderField}
                    name="busName"
                    label="Nazwa pojazdu"
                    validate={Required}
                /> 
               <Field
                    type="number"
                    min="0"
                    max="100"
                    component={renderField}
                    name="seatsNumber"
                    label="Ilość miejsc"
                    validate={[Required, max100,min0]}
                /> 

                <button type="submit">Dodaj</button>
            </form>
        </div>
    )
}

const form = reduxForm({
    form: 'AddBusForm'
})(AddBusForm)

export default form;