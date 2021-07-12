import { ThemeEnum } from "~/core/enums/theme.enum";
import { ThemeType } from "~/core/types/theme/theme.type";

const DarkTheme: ThemeType = {
  name: ThemeEnum.Dark,
  colors: {
    primary: '#283845',
    secondary: '#202C39',
    text: '#FFF',
    textOnPrimary: '#FFF',
    textOnSecondary: '#FFF',
  }
}

export default DarkTheme;