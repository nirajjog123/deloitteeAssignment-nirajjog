import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Dashboard from './dashboard/dashboard';
import Login from './login/login';
import Registration from './registration/registration';

function App() {
  return (
    <div className="App">
     <Router>
       <Route path='/login' component={Login}></Route>
       <Route path='/dashboard' component={Dashboard}></Route>
       <Route path='/registration' component={Registration}></Route>
     </Router>
    </div>
  );
}

export default App;
