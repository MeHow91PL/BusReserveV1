import React from 'react';
import {Field, reduxForm} from 'redux-form'

const SimpleSampleForm = props =>{
    const {handleSubmit, pristine, reset, submitting } = props;
    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label>Imię</label>
                <div>
                    <Field 
                        name="imie"
                        component="input"
                        type="text"
                        placeholder="Podaj swoje imię" />
                </div>  
            </div>
            <div>
                <label>Płeć</label>
                <div>
                    <label>
                        <Field 
                            name="plec"
                            component="input"
                            type="radio"
                            value="Mężczyzna"
                        />{''}
                        Mężczyzna
                    </label>
                    <label>
                        <Field 
                            name="plec"
                            component="input"
                            type="radio"
                            value="Kobieta"
                        />{''}
                        Kobieta
                    </label>
                </div>  
            </div>
            
        </form> 
    )
}