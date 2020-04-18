import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import {Home, Country} from '../pages';
import {AppContainer} from './styles';

function App() {
  return (
    <AppContainer>
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
    </AppContainer>
  );
}

export default App;
