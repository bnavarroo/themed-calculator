import styled from "styled-components";
import { ThemeColorsEnum } from '~/core/enums/theme/theme-colors.enum';
import { darkenColorTheme } from '~/utilities/functions/colors';
import { defaultPadding } from "~/styles/constants";

import { percentDarkMap } from '../../constants';

export const StyledDisplay = styled.div`
  background: ${({theme}) => darkenColorTheme(theme, ThemeColorsEnum.Primary, percentDarkMap[theme.name])};
  padding: ${defaultPadding};
  text-align: right;
  font-size: 2rem;
  font-weight: 600;
  word-break: break-all;

  small {
    display: block;
    font-weight: 400;
    min-height: .4em;
    font-size: .4em;
    padding-bottom: .5rem;
  }
`;
