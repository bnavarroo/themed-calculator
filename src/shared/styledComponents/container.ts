import styled from 'styled-components';
import { defaultPadding, breakpointMinDesktop } from '~/styles/constants';

type Props = {
  full?: boolean;
}

export const StyledContainer = styled.div<Props>`
  width: calc(100% - ${defaultPadding * 2}px);
  max-width: 100%;
  padding-left: ${defaultPadding}px;
  padding-right: ${defaultPadding}px;

  ${({ full }) => !full && `
    margin-left: auto;
    margin-right: auto;

    @media(min-width: ${breakpointMinDesktop}) {
      max-width: ${breakpointMinDesktop};
    }
  `}
`;
