import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/views/Home'
// import Landing from './components/layout/Landing';;
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/layouts/Navigation';
import Register from './components/auth/Register';
import Login from './components/auth/Login'
import Footer from './components/layouts/Footer'
import './App.css';


const App = () => (
  <Router>
    <Fragment>
      <Navigation />
      <Route exact path='/' component={Home} />
      <section className='container'>
      {/* this section was making a white space above the footer */}
        <Switch>
          <Route exact path='/login' component={Login} />
          <Route exact path='/registerUser' component={Register} />
        </Switch>
      </section>
        <Footer/>
    </Fragment>
  </Router>
);

export default App;
