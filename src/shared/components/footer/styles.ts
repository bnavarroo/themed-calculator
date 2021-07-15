import styled from 'styled-components';
import { defaultPadding } from '~/styles/constants';

export const StyledFooter = styled.footer`
  font-size: 14px;
  text-align: center;
  padding-top: ${defaultPadding};
  padding-bottom: ${defaultPadding};
  border-top: 1px solid ${props => props.theme.colors.tertiary};
`;