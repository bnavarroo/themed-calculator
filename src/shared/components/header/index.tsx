import React, { useContext, Dispatch } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { initalTheme } from '~/_config/theme';
import { ThemeEnum } from '~/core/enums/theme/theme.enum';
import { StyledContainer } from '~/shared/styledComponents/container';

import { StyledHeader, StyledWrapper, StyledTitle, StyledThemeSwitch } from './styles';

type Props = {
  toggleTheme: Dispatch<any>;
};

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, name } = useContext(ThemeContext);
  const themeLabel: string = name === initalTheme.name ? 'Ativar' : 'Desativar';
  const themeText = initalTheme.name === ThemeEnum.Light ? 'Escuro' : 'Claro';

  return (
    <StyledHeader>
      <StyledContainer>
        <StyledWrapper>
          <StyledTitle>Calculadora Temática</StyledTitle>
          <StyledThemeSwitch>
            <label>
              <small>{themeLabel}</small> Tema {themeText}
            </label>
            <Switch
              onChange={toggleTheme}
              checked={name !== initalTheme.name}
              checkedIcon={false}
              uncheckedIcon={false}
              height={10}
              width={40}
              handleDiameter={20}
              offColor='#DDD'
              onColor={colors.tertiary}
              boxShadow='0px 1px 5px rgba(0, 0, 0, 0.6)' 
              activeBoxShadow='0px 0px 1px 5px rgba(0, 0, 0, 0.2)'
            />
          </StyledThemeSwitch>
        </StyledWrapper>
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;