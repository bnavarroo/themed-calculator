import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import { initalTheme } from '~/_config/theme';
import useLocalTheme from '~/utilities/hooks/useLocalTheme';
import Calculator from '~/app/calculator';
import Header from '~/shared/components/header';
import Footer from '~/shared/components/footer';
import { StyledPageWrapper } from '~/shared/styledComponents/page-wrapper';
import { StyledContentPageContainer } from '~/shared/styledComponents/container';
import GlobalStyle from '~/styles/global';

const App: React.FC = () => {
  const { theme, toggleTheme } = useLocalTheme<DefaultTheme>(initalTheme);
  
  return (
    <ThemeProvider theme={theme}>
      <StyledPageWrapper>
        <Header toggleTheme={toggleTheme} />
        <StyledContentPageContainer>
          <div className="content-page-wrapper">
            <Calculator />
          </div>
        </StyledContentPageContainer>
        <Footer />
      </StyledPageWrapper>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
