import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/views/Home';
import Footer from './components/layouts/Footer';
import RequestHelpPage from './components/views/RequestHelpPage';
import Navigation from './components/layouts/Navigation';
import Register from './components/auth/Register';
import Login from './components/auth/Login'
import ChurchRequestBoard from './components/views/ChurchRequestBoard'
import About from './components/views/About';
import Give from './components/views/Give';
import Profile from './components/views/Profile';
import Alert from './components/layouts/Alert'
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';
import Update from './components/assests/profile/Update';

//redux
import { Provider } from 'react-redux';
import store from './store';


import HouseHoldItems from './components/views/requestedItems/HouseHoldItems';
import Hygiene from './components/views/requestedItems/Hygiene';
import Food from './components/views/requestedItems/Food';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

// Sets authentication token
if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navigation />
          <Route exact path='/' component={Home} />
          <section className='container' id="section">
            <Alert />
            <Switch>
              <Route exact path='/about' component={About} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/registerUser' component={Register} />
              <Route exact path='/requestHelpPage' component={RequestHelpPage} />
              <Route exact path='/houseHoldItems' component={HouseHoldItems} />
              <Route exact path='/hygiene' component={Hygiene} />
              <Route exact path='/food' component={Food} />
              <Route exact path='/churchRequestBoard' component={ChurchRequestBoard} />
              <Route exact path='/give' component={Give} />
              <Route exact path='/profile' component={Profile} />
              <Route exact path='/update' component={Update} />
            </Switch>
          </section>
          <Footer />
        </Fragment>
      </Router>
    </Provider>
  );

}

export default App;
