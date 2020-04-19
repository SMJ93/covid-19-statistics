import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import {Home, Country} from '../pages';
import {Header} from '../components';
import {AppContainer} from './styles';

function App() {
  return (
    <AppContainer>
      <Router>
        <div>
          <Header />
          <Switch>
            <Route path="/country/:countryCode">
              <Country />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </AppContainer>
  );
}

export default App;
