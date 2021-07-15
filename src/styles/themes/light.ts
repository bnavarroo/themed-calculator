import { ThemeEnum } from "~/core/enums/theme/theme.enum";
import { ThemeType } from "~/core/types/theme/theme.type";

const LightTheme: ThemeType = {
  name: ThemeEnum.Light,
  colors: {
    primary: '#FFF',
    secondary: '#425064',
    tertiary: '#F29559',
    text: '#283845',
    textOnPrimary: '#283845',
    textOnSecondary: '#FFF',
  }
}

export default LightTheme;