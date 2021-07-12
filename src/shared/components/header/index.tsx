import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';
import { initalTheme } from '~/_config/theme';
import { ThemeEnum } from '~/core/enums/theme.enum';
import { Container } from '~/styles/utilities/container.styled';

import { HeaderRow } from './styles/header-row.styled';
import { HeaderCol } from './styles/header-col.styled';

type Props = {
  toggleTheme: () => void;
};

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, name } = useContext(ThemeContext);
  const themeLabel: string = name === initalTheme.name ? 'Ativar' : 'Desativar';
  const themeText = initalTheme.name === ThemeEnum.Light ? 'Escuro' : 'Claro';

  return (
    <header>
      <Container>
        <HeaderRow>
          <HeaderCol>Calculadora</HeaderCol>
          <HeaderCol>
            <div>
              <small>{themeLabel}</small> Tema {themeText}
            </div>
            <Switch
              onChange={toggleTheme}
              checked={name !== initalTheme.name}
              checkedIcon={false}
              uncheckedIcon={false}
              height={10}
              width={40}
              handleDiameter={20}
              offColor={shade(0.5, colors.primary)}
              onColor={colors.secondary}
            />
          </HeaderCol>
        </HeaderRow>
      </Container>
    </header>
  );
};

export default Header;