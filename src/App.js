import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/views/Home'
import RequestHelpPage from './components/views/RequestHelpPage'
import Navigation from './components/layouts/Navigation';
import Register from './components/auth/Register';
import Login from './components/auth/Login'

import HouseHoldItems from './components/views/requestedItems/HouseHoldItems'
import Hygiene from './components/views/requestedItems/Hygiene';
import Food from './components/views/requestedItems/Food';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


const App = () => (
  <Router>
    <Fragment>
      <Navigation />
      <Route exact path='/' component={Home} />
      <section className='container'>
        <Switch>
          <Route exact path='/login' component={Login} />
          <Route exact path='/registerUser' component={Register} />
          <Route exact path='/requestHelpPage' component={RequestHelpPage} />
          <Route exact path='/houseHoldItems' component={HouseHoldItems} />
          <Route exact path='/hygiene' component={Hygiene} />
          <Route exact path='/food' component={Food} />
        </Switch>
      </section>
    </Fragment>
  </Router>
);

export default App;
