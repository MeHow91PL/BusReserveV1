import React from 'react';
import { Field, reduxForm } from 'redux-form'

const validate = values => {
    const errors = {};
    console.log("err", values);

    if (!values.imie) {
        errors.imie = "To pole jest wymagane!";
    }

    return errors;
}

const warn = values => {
    const warnings = {};
    console.log("warn", values);
    if (values.plec === 'Kobieta') {
        warnings.plec = "Ta strona jest przeznaczona głównie dla płci męskiej!";
    }

    return warnings;
}

const renderField = ({
    input,
    label,
    type,
    meta: { touched, error, warning }
}) => (
        <div>
            <label>{label}</label>
            <div>
                <input {...input} placeholder={label} type={type} />
                {touched &&
                    ((error && <span>{error}</span>) ||
                        (warning && <span>{warning}</span>))}
            </div>
        </div>
    )

const SimpleSampleForm = props => {
    const { handleSubmit, pristine, submitting } = props;
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field
                    name="imie"
                    component={renderField}
                    type="text"
                    label="Podaj swoje imię"
                />
            </div>
            <div>
                <label>Płeć</label>
                <Field
                    name="plec"
                    component={renderField}
                    type="radio"
                    value="Mężczyzna"
                />{''}
                Mężczyzna
                        <Field
                    name="plec"
                    component={renderField}
                    type="radio"
                    value="Kobieta"
                />{''}
                Kobieta
            </div>
            <div>
                <button type="submit"
                    disabled={pristine || submitting}
                >
                    Zapisz
                </button>
            </div>
        </form>
    )
}


const form = reduxForm({
    form: "simple",
    validate,
    warn
})(SimpleSampleForm)

export default form;