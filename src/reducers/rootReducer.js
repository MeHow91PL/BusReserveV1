import {combineReducers} from 'redux';
import AddBusForm from './addBusForm';
import DiagramReducer from './diagramReducer';
import Opcje from './opcjeReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers(
    {
        AddBusForm,
        Diagram: DiagramReducer,
        Opcje,
        form: formReducer
    }
);

export default rootReducer;