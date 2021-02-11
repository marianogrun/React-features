import React from 'react';
import Layout from './pages/Layout';
import Todos from './pages/Todos';
import Favorites from './pages/Favorites';
import Settings from './pages/Settings';
import { Router, Route, IndexRoute, hashHistory } from "react-router";


function App() {
  return (
    <Router history={hashHistory}>
      <Route exact path="/" component={Layout}>
        <IndexRoute component={Todos}></IndexRoute>
        <Route path="favorites" component={Favorites}></Route>
        <Route path="settings" component={Settings}></Route>
      </Route>
    </Router>
  );
}

export default App;