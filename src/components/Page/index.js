import styled from 'styled-components';

import {colors} from '../../style-guide';

const Page = styled.div`
  width: '100%';
  max-width: 900px;
  background-color: ${colors.secondary.default};
  padding: 30px;
  color: ${colors.greys.darkest};
  margin: auto;
`;

export default Page;
