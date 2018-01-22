import React from 'react';
import { reduxForm, Field } from 'redux-form';

const Required = value => (value ? undefined : 'To pole jest wymagane!');
const maxLength = max => value => (value && value.length > max ? 'To pole może mieć maxymalnie ' + max + ' znaków!' : undefined);
const maxLength15 = maxLength(15);


//SAMPLE
// const email = value =>
// value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
//   ? 'Invalid email address'
//   : undefined
// const tooOld = value =>
// value && value > 65 ? 'You might be too old for this' : undefined
// const aol = value =>
// value && /.+@aol\.com/.test(value)
//   ? 'Really? You still use AOL for your email?'
//   : undefined
// const alphaNumeric = value =>
// value && /[^a-zA-Z0-9 ]/i.test(value)
//   ? 'Only alphanumeric characters'
//   : undefined
// export const phoneNumber = value =>
// value && !/^(0|[1-9][0-9]{9})$/i.test(value)
//   ? 'Invalid phone number, must be 10 digits'
//   : undefined



const renderField = ({
    input,
    label,
    type,
    meta: { touched, error, warning }
}) => (
        <div>
            <label>{label}</label>
            <div>
                <input {...input} type={type} placeholder={label} />
                {touched && ((error && <span>{error}</span>) ||
                    (warning && <span>{warning}</span>))}
            </div>
        </div>
    )

const FieldValidationFieldForm = props => {
    const { pristine, submitting, valid, handleSubmit } = props;

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field
                    name='imie'
                    type='text'
                    component={renderField}
                    label='Imię'
                    validate={Required} />
                <Field
                    name='wiek'
                    type='text'
                    component={renderField}
                    label='Wiek'
                    validate={[Required, maxLength15]} />
            </div>
            <div>
                <button type="submit" disabled={pristine}>Zapisz</button>
            </div>
        </form>
    );
}

const form = reduxForm(
    { form: 'FieldValidationForm' }
)(FieldValidationFieldForm);

export default form;