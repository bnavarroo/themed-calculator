import styled from "styled-components";
import { ThemeEnum } from "~/core/enums/theme/theme.enum";
import { ThemeColorsEnum } from '~/core/enums/theme/theme-colors.enum';
import { darkenColorTheme } from '~/utilities/functions/colors';
import { percentDarkMap } from '~/app/calculator/constants';

export const StyledButton = styled.button`
  width: 100%;
  padding: 1rem .75rem;
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  min-height: 4rem;
  color: ${({theme}) => theme.colors.textOnPrimary};
  border: 1px solid ${({theme}) => darkenColorTheme(theme, ThemeColorsEnum.Primary, percentDarkMap[theme.name])};
  background: ${
    ({theme}) => theme.name === ThemeEnum.Dark 
      ? darkenColorTheme(theme, ThemeColorsEnum.Primary, .015)
      : darkenColorTheme(theme, ThemeColorsEnum.Primary, .05)
  };

  &:hover {
    background: ${
    ({theme}) => theme.name === ThemeEnum.Dark 
      ? darkenColorTheme(theme, ThemeColorsEnum.Primary, .03)
      : darkenColorTheme(theme, ThemeColorsEnum.Primary, .065)
  };
  }
`;

export const StyledActionButton = styled(StyledButton)`
  background: ${({theme}) => theme.colors.tertiary};
  color: ${({theme}) => theme.colors.primary};
  &:hover {
    background: ${({theme}) => darkenColorTheme(theme, ThemeColorsEnum.Tertiary, .1)};
  }
`;
