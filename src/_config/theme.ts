import LightTheme from '~/styles/themes/light';
import DarkTheme from '~/styles/themes/dark';
import { ThemeType } from '~/core/types/theme/theme.type';

export const initalTheme: ThemeType = LightTheme;

export const themeStorageKey: string = 'themed-calculator-theme';

export { LightTheme, DarkTheme };
