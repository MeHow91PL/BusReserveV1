import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import HomePage from './components/containers/HomePage';
import AddBusPage from './components/containers/AddBusPage';
import DiagramPage from './components/Diagram/DiagramPage';
import WalidacjaFormularzy from './components/containers/WalidacjaFormularzy';
import Somed from './somed/components/Somed';

class App extends Component {
  render() {
    return (
      <Router>
          <div>
            <Route exact path='/' component={HomePage} />
            <Route path='/AddBus' component={AddBusPage} />
            <Route path='/Diagram' component={DiagramPage} />
            <Route path='/FormVal' component={WalidacjaFormularzy} />
            <Route path='/Somed' component={Somed} />
          </div>
      </Router>
    );
  }
}

export default App;
