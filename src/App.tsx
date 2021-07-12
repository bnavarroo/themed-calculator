import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import { initalTheme, LightTheme, DarkTheme } from '~/_config/theme';
import { ThemeEnum } from '~/core/enums/theme.enum';
import useLocalTheme from '~/utilities/hooks/local-theme.hook';
import Header from '~/shared/components/header';
import Footer from '~/shared/components/footer';
import GlobalStyle from '~/styles/global.style';

const App: React.FC = () => {
  const [theme, setTheme] = useLocalTheme<DefaultTheme>(initalTheme);
  const toggleTheme = () => {
    setTheme(theme.name === ThemeEnum.Light ? DarkTheme : LightTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="app-wrapper">
        <Header toggleTheme={toggleTheme} />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
