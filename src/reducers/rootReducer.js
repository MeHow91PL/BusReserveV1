import {combineReducers} from 'redux';
import AddBusForm from './addBusForm';
import DiagramReducer from './diagramReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers(
    {
        AddBusForm,
        Diagram: DiagramReducer,
        form: formReducer
    }
);

export default rootReducer;