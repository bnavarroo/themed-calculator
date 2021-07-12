import 'styled-components';
import { ThemeEnum } from "~/core/enums/theme.enum";
import { ThemeColorsType } from "~/core/types/theme/theme.colors.type";

declare module 'styled-components' {
  export interface DefaultTheme {
    name: ThemeEnum,
    colors: ThemeColorsType
  };
}