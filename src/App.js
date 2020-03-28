import React from 'react';
import Navigation from './components/layouts/Navigation';
import RegisterUser from './components/views/RegisterUser';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <div className="App">
      <h1>App component</h1>
      <Navigation />
      <RegisterUser />
    </div>
  );
}

export default App;
