import React from 'react';
import {useHistory, useRouteMatch} from 'react-router-dom';

import {GitHubLogo} from '../../assets/images';
import {Header, OuterColumn, HeaderContainer} from './styles';

export default function HeaderComponent() {
  const history = useHistory();

  const showBackHomeButton = !useRouteMatch('/home');

  const goHome = () => history.push('/home');

  return (
    <Header>
      <HeaderContainer>
        <OuterColumn>
          {showBackHomeButton && (
            <button type="button" onClick={goHome}>
              Back Home
            </button>
          )}
        </OuterColumn>
        <h1>Covid-19 Statistics</h1>
        <OuterColumn>
          <a
            href="https://github.com/SMJ93/covid-19-statistics"
            target="_blank"
            rel="noopener noreferrer">
            <img src={GitHubLogo} width="50" height="50" />
          </a>
        </OuterColumn>
      </HeaderContainer>
    </Header>
  );
}
