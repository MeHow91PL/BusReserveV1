import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import HomePage from './components/containers/HomePage';
import AddBusPage from './components/containers/AddBusPage';
<<<<<<< HEAD
import DiagramPage from './components/Diagram/DiagramPage';
=======
import WalidacjaFormularzy from './components/containers/WalidacjaFormularzy';
>>>>>>> e51a54243790ac6b8f1a97133268b53fc20f5387
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={HomePage} />
          <Route path='/AddBus' component={AddBusPage} />
<<<<<<< HEAD
          <Route path='/Diagram' component={DiagramPage} />
=======
          <Route path='/FormVal' component={WalidacjaFormularzy} />
>>>>>>> e51a54243790ac6b8f1a97133268b53fc20f5387
        </div>
      </Router>
    );
  }
}

export default App;
