import React, {useEffect, useState} from 'react';
import './App.css';
import firebase from './firebase';
import {BrowserRouter as Router, Route, Link, Redirect, Switch} from 'react-router-dom';

import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';
import HomePage from './components/HomePage';

function App() {
  const [firebaseInitilized, setFirebaseInitialized] = useState(false);
    
  useEffect(() => {
    firebase.isInitialized().then(val => {
      setFirebaseInitialized(val);
    })
  });

  return firebaseInitilized !== false ? (
    <header>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
      <h1>Firebase Connected</h1>
    </header>
  ) : (
    <header>
      <h1>Loading...</h1>
    </header>
  )
}

export default App;
