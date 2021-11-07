// import logo from './logo.svg';
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { Route } from 'react-router-dom';
import Activity from './pages/Activity';
import Progress from './pages/Progress';
import Home from './pages/Home';
import Program from './pages/Program';

function App() {
  return (<>
<div>
<Route  path="/">
    <Home/>
  </Route>
  {/* <Route  path="/activity">
    <Activity/>
  </Route>
  <Route path="/progress">
    <Progress/>
  </Route>
  <Route path="/program">
    <Program/>
  </Route> */}
  </div>
 
  </>)
}

export default App ;
