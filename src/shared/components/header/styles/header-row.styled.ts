import styled from 'styled-components';
import { breakpointMinDesktop } from '~/styles/global.config';

export const HeaderRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  @media(min-width: ${breakpointMinDesktop}) {
    justify-content: space-between;
  }
`;
