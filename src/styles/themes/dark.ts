import { ThemeEnum } from "~/core/enums/theme.enum";
import { ThemeType } from "~/core/types/theme/theme.type";

const DarkTheme: ThemeType = {
  name: ThemeEnum.Dark,
  colors: {
    primary: '#202C39',
    secondary: '#283845',
    text: '#FFF',
    textOnPrimary: '#FFF',
    textOnSecondary: '#FFF',
  }
}

export default DarkTheme;