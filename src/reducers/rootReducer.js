import {combineReducers} from 'redux';
import SampleReducer from './sampleReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers(
    {
        SampleReducer,
        form: formReducer
    }
);

export default rootReducer;