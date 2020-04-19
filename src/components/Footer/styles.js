import styled from 'styled-components';

import {colors} from '../../style-guide';

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: '100%';
  background-color: ${colors.greys.lightest};
  height: 100px;

  h2 {
    color: ${colors.greys.darkest};
  }
`;
