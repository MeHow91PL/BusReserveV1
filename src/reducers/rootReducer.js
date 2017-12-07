import {combineReducers} from 'redux';
import addBus from './addBusForm';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers(
    {
        addBus,
        form: formReducer
    }
);

export default rootReducer;