import React, { Component } from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import HomePage from './components/containers/HomePage';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route exact path='/' component={HomePage} />
        </Router>
      </div>
    );
  }
}

export default App;
