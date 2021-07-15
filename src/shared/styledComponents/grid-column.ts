import styled from 'styled-components';
import { BreakpointEnum } from "~/core/enums/breakpoint/breakpoint.enum";
import { defaultPadding, breakpoints } from '~/styles/constants';


function getGridValue(value: number): string {
  return `${(value / 12) * 100}%`;
}

type Props = {
  [BreakpointEnum.Desktop]?: number;
  [BreakpointEnum.DesktopSmall]?: number;
  [BreakpointEnum.Tablet]?: number;
  [BreakpointEnum.Mobile]?: number;
  padding?: boolean;
}

export const StyledGridColumn = styled.div<Props>`

  box-sizing: border-box;
  flex: 1 0;
  ${({ padding = true }) => padding && `
    padding-left: ${defaultPadding};
    padding-right: ${defaultPadding};
  `}

  ${({ mobile }) => mobile && `
    @media screen and (min-width: ${breakpoints.mobile.min}) {
      flex: 0 0 auto;
      width: ${getGridValue(mobile)}
    }
  `}

  ${({ tablet }) => tablet && `
    @media screen and (min-width: ${breakpoints.tablet.min}) {
      flex: 0 0 auto;
      width: ${getGridValue(tablet)}
    }
  `}

  ${({ desktopSmall }) => desktopSmall && `
    @media screen and (min-width: ${breakpoints.desktopSmall.min}) {
      flex: 0 0 auto;
      width: ${getGridValue(desktopSmall)};
    }
  `}

  ${({ desktop }) => desktop && `
    @media screen and (min-width: ${breakpoints.desktop.min}) {
      flex: 0 0 auto;
      width: ${getGridValue(desktop)};
    }
  `}
`;
