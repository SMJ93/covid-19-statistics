import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import {Home, Country} from '../pages';
import {Header, Footer} from '../components';
import {AppContainer, FullHeight} from './styles';

function App() {
  return (
    <AppContainer>
      <Router>
        <FullHeight>
          <Header />
          <Switch>
            <Route path="/country/:countryCode">
              <Country />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Redirect from="*" to="/home" />
          </Switch>
          <Footer />
        </FullHeight>
      </Router>
    </AppContainer>
  );
}

export default App;
