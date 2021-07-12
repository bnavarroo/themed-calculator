import { ThemeEnum } from "~/core/enums/theme.enum";
import { ThemeColorsType } from "~/core/types/theme/theme.colors.type";

export type ThemeType = {
  name: ThemeEnum,
  colors: ThemeColorsType,
};
