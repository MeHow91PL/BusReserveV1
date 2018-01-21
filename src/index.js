import React from 'react';
import ReactDOM from 'react-dom'; 
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import RootReducer from './reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './App';
import './styles/App.css';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(RootReducer,composeWithDevTools(
    
));

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>
, document.getElementById('root'));
registerServiceWorker();
