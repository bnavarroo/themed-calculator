import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import { initalTheme } from '~/_config/theme';
import useLocalTheme from '~/utilities/hooks/local-theme.hook';
import Header from '~/shared/components/header';
import Footer from '~/shared/components/footer';
import { StyledPageWrapper } from '~/shared/styledComponents/pageWrapper';
import GlobalStyle from '~/styles/global';

const App: React.FC = () => {
  const { theme, toggleTheme } = useLocalTheme<DefaultTheme>(initalTheme);
  
  return (
    <ThemeProvider theme={theme}>
      <StyledPageWrapper>
        <Header toggleTheme={toggleTheme} />
        <div>Conteúdo da Página</div>
        <Footer />
      </StyledPageWrapper>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
