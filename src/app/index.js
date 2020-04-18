import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './index.css';
import { Home, Country } from '../pages';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/country/:countryCode">
            <Country />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
