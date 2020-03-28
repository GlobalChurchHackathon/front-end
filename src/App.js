import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import Landing from './components/layout/Landing';
import Navigation from './components/layouts/Navigation';
import Register from './components/auth/Register';
import Login from './components/auth/Login'

import './App.css';


const App = () => (
  <Router>
    <Fragment>
      <Navigation />
      {/* <Route exact path='/' component={Landing} /> */}
      <section className='container'>
        <Switch>
          <Route exact path='/login' component={Login} />
          <Route exact path='/registerUser' component={Register} />
        </Switch>
      </section>
    </Fragment>
  </Router>
);

export default App;
