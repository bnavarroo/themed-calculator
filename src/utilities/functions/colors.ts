import { darken, lighten } from 'polished';
import { ThemeColorsEnum } from '~/core/enums/theme/theme-colors.enum';
import { ThemeType } from "~/core/types/theme/theme.type";

export const darkenColorTheme = (theme: ThemeType, colorKey: ThemeColorsEnum, percent: number): string => {
  const color = theme.colors[colorKey];
  return darken(percent, color);
}

export const lightenColorTheme = (theme: ThemeType, colorKey: ThemeColorsEnum, percent: number): string => {
  const color = theme.colors[colorKey];
  return lighten(percent, color);
}