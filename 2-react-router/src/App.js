import React from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './pages/Layout';
import Featured from './pages/Featured';
import Archives from './pages/Archives';
import Settings from './pages/Settings';
import { Router, Route, IndexRoute, hashHistory } from "react-router";


function App() {
  return (
    <Router history={hashHistory}>
    	<Route exact path="/" component={Layout}>
    		<IndexRoute component={Featured}></IndexRoute>
    		<Route path="archives" component={Archives}></Route>
    		<Route path="settings" component={Settings}></Route>
    	</Route>
    </Router>
  );
}

export default App;
