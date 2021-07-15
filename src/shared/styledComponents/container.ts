import styled from 'styled-components';
import { defaultPadding, breakpoints } from '~/styles/constants';
import { ThemeColorsEnum } from '~/core/enums/theme/theme-colors.enum';
import { darkenColorTheme } from '~/utilities/functions/colors';
import { percentDarkMap } from '~/app/calculator/constants';

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

    @media(min-width: ${breakpoints.tablet.min}) {
      max-width: ${breakpoints.tablet.min};
    }

    @media(min-width: ${breakpoints.desktopSmall.min}) {
      max-width: ${breakpoints.desktopSmall.min};
    }

    @media(min-width: ${breakpoints.desktop.min}) {
      max-width: ${breakpoints.desktop.min};
    }
    
  `}
`;

export const StyledContentPageContainer = styled(StyledContainer)`
  display: flex;
  justify-content: center;
  padding:.5rem;

  > .content-page-wrapper {
    width: 100%;
    max-width: 400px;
    border: 1px solid ${({theme}) => darkenColorTheme(theme, ThemeColorsEnum.Primary, percentDarkMap[theme.name])};
  }
`;
