import styled from 'styled-components';

import {colors} from '../../style-guide';

export const Header = styled.div`
  align-items: center;
  width: '100%';
  background-color: ${colors.primary.default};
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: '100%';
  max-width: 900px;
  background-color: ${colors.primary.default};
  padding: 30px;
  color: ${colors.greys.white};
  margin: auto;
`;

export const OuterColumn = styled.div`
  width: 100px;
  justify-content: center;
  text-align: ${(props) => (props.left ? 'left' : 'right')};
`;
