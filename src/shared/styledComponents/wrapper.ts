import styled from 'styled-components';
import { ThemeColorsEnum } from '~/core/enums/theme/theme-colors.enum';
import { darkenColorTheme } from '~/utilities/functions/colors';
import { percentDarkMap } from '~/app/calculator/constants';

export const StyledPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 100vw;
  min-height: 99.8vh;
`;

export const StyledContentPageWrapper = styled.div`
  width: 100%;
  max-width: 400px;
  border: 1px solid ${({theme}) => darkenColorTheme(theme, ThemeColorsEnum.Primary, percentDarkMap[theme.name])};
`;
