import React from 'react';
import {Field, reduxForm} from 'redux-form';
import { connect } from 'react-redux';
import {InitializeAddBusForm} from '../../actions/actions';

//Przykładowe dane symulujące przekazanie inicjalizujących danych z serwera
const data = {
    nazwa: "Nowy bus",
    rzedy: "10",
    liczbaMiejsc: 20
}

//Walidacja synchroniczna
const validate = values =>
{
    let errors = {};

    if (!values.nazwa) {
        errors.nazwa = "Nazwa nie może być pusta!";
    }

    return errors;
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

  

let AddBusForm = (props) => {
    const {handleSubmit, reset, pristine, load} = props;
    return(
        <form onSubmit={handleSubmit}>
            {console.log("## Add bus form: props", props)}
            <table>
                <tbody>
                <tr>
                    <td>
                        <label htmlFor="nazwa">Nazwa</label>
                        </td>
                    <td>
                        <Field name="nazwa" component={renderField} type="text" />
                    </td>
                </tr>
                <tr>
                    <td>
                        <label htmlFor="rzedy">Ilość rzędów</label>
                        </td>
                    <td>
                        <Field name="rzedy" component="input" type="text" />
                    </td>
                </tr><tr>
                    <td>
                        <label htmlFor="liczbaMiejsc">Ogólna liczba miejsc</label>
                        </td>
                    <td>
                        <Field name="liczbaMiejsc" component="input" type="number" min="100" />
                    </td>
                </tr>
                <tr>
                    <td><button type="button" disabled={pristine} onClick={reset}>wyczyść</button></td>
                    {console.log("++ AddBusFrom: render: data", data)}
                    <td><button type="button" disabled={!pristine} onClick={() => load(data)}>init</button></td>
                    <td><button type="submit">Dodaj</button></td>
                </tr>
                </tbody>
            </table>
            
        </form>
    )
}



AddBusForm = reduxForm({
    // enableReinitialize :true,
    form: 'addBus',
    validate
})(AddBusForm);

const mapStateToProps = (state) => {
    console.log("MapStateToProps: state:", state);
    return {
        initialValues: state.addBus.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        load: (data) => dispatch(InitializeAddBusForm(data))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddBusForm);