import { ThemeColorsEnum } from '~/core/enums/theme/theme-colors.enum';

export type ThemeColorsType = {
  [ThemeColorsEnum.Primary] : string
  [ThemeColorsEnum.Secondary]: string,
  [ThemeColorsEnum.Tertiary]: string,
  text: string,
  textOnPrimary: string,
  textOnSecondary: string,
};
