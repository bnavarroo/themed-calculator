import styled from 'styled-components';
import { breakpointMinDesktop } from '~/styles/global.config';

export const HeaderCol = styled.div`
  display: flex;
  width:100%;
  text-align: center;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;

  @media(min-width: ${breakpointMinDesktop}) {
    display: block;
    width: auto;
    text-align: left;
    justify-content: flex-start;
  }
`;
