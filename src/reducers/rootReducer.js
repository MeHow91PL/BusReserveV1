import {combineReducers} from 'redux';
import AddBusForm from './addBusForm';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers(
    {
        AddBusForm,
        form: formReducer
    }
);

export default rootReducer;