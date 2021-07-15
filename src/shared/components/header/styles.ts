import styled from 'styled-components';
import { breakpoints, defaultPadding } from '~/styles/constants';

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  min-height: 80px;
  padding-top: ${defaultPadding};
  padding-bottom: ${defaultPadding};
  background: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.textOnSecondary};
`;

export const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media(min-width: ${breakpoints.desktopSmall?.min}) {
    justify-content: space-between;
    flex-direction: row;
  }
`;

export const StyledTitle = styled.h1`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 10px;
  text-align: center;

  @media(min-width: ${breakpoints.desktopSmall?.min}) {
    margin-bottom: 0px;
  }
`;

export const StyledThemeSwitch = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;

  label {
    margin-right: 10px;
  }
`;
