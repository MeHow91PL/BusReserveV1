import React from 'react';
import {Field, reduxForm} from 'redux-form';
import { connect } from 'react-redux';
import {InitializeAddBusForm} from '../../actions/actions';


let AddBusForm = (props) => {
    const {handleSubmit, reset, pristine, load} = props;
    // console.log(load);
    return (
        <form onSubmit={handleSubmit}>
            {console.log("props", props)}
            {console.log("laod props", load)}
            <table>
                <tbody>
                    <tr>
                        <td>
                            <label htmlFor="nazwa">Nazwa</label>
                        </td>
                        <td>
                            <Field name="nazwa" component="input" type="text" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="rzedy">Ilość rzędów</label>
                        </td>
                    <td>
                        <Field name="liczbaMiejsc" component="input" type="number" min="100" />
                    </td>
                </tr>
                <tr>
                    <td><button type="button" disabled={pristine} onClick={reset}>wyczyść</button></td>
                    <td><button type="button" disabled={!pristine} onClick={() => load()}>init</button></td>
                    <td><button type="submit">Dodaj</button></td>
                </tr>
                </tbody>
            </table>

        </form>
    )
}



// You have to connect() to any reducers that you wish to connect to yourself

AddBusForm = reduxForm({
    form: 'addBus'
})(AddBusForm);

const mapStateToProps = (state) => {
    console.log(state);
    return {
        initialValues: state.AddBusForm.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        load: () => dispatch(InitializeAddBusForm())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddBusForm);
