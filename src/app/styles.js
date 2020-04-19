import styled from 'styled-components';

import {colors} from '../style-guide';

export const AppContainer = styled.div`
  text-align: center;

  a {
    color: ${colors.primary.default};
    text-decoration: none;
    font-weight: bold;
  }

  a:hover {
    text-decoration: underline;
  }
`;

export const FullHeight = styled.div`
  height: 100vh;
`;
