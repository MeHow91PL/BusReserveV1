import React from 'react';
import {Field, reduxForm} from 'redux-form';

let AddBusForm = (props,{data}) => {
    const {handleSubmit, reset, pristine} = props;
    // console.log(load);
    return(
        <form onSubmit={handleSubmit}>
            {console.log("props", props, "data: " , data)}
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
                    <td><button type="button" disabled={!pristine} onClick={()=>alert()}>init</button></td>
                    <td><button type="submit">Dodaj</button></td>
                </tr>
                </tbody>
            </table>
            
        </form>
    )
}



AddBusForm = reduxForm({
    initialValues: 'test',
    form: 'addBus'
})(AddBusForm);

export default AddBusForm;