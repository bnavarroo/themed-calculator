import styled from 'styled-components';
import { defaultPadding, breakpoints } from '~/styles/constants';

type Props = {
  full?: boolean;
}

export const StyledContainer = styled.div<Props>`
  width: calc(100% - (${defaultPadding} * 2));
  max-width: 100%;
  padding-left: ${defaultPadding};
  padding-right: ${defaultPadding};
  box-sizing: border-box;

  &:before, &:after {
    content: ' ';
    display: table;
  }

  &:after {
    clear: both;
  }

  ${({ full }) => !full && `
    margin-left: auto;
    margin-right: auto;
    @media(min-width: ${breakpoints.desktopSmall.min}) {
      max-width: ${breakpoints.desktopSmall.min};
    }
  `}
`;
