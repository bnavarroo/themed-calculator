import styled from 'styled-components';
import { defaultPadding } from '~/styles/constants';

export const StyledRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: ${defaultPadding} * -1;
  margin-right: ${defaultPadding} * -1;

  >* {
    flex-shrink: 0;
    width: 100%;
    max-width: 100%;
  }
`;
