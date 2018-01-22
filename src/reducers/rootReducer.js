import {combineReducers} from 'redux';
<<<<<<< HEAD
import AddBusForm from './addBusForm';
import DiagramReducer from './diagramReducer';
=======
import addBus from './addBusForm';
>>>>>>> e51a54243790ac6b8f1a97133268b53fc20f5387
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers(
    {
<<<<<<< HEAD
        AddBusForm,
        Diagram: DiagramReducer,
=======
        addBus,
>>>>>>> e51a54243790ac6b8f1a97133268b53fc20f5387
        form: formReducer
    }
);

export default rootReducer;