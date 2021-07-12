import React from 'react';

import { FooterStyled } from './styles/footer.styled';

const Footer: React.FC = () => {
  return (
    <FooterStyled>
      Desenvolvido por <b>Bruno Navarro</b>
    </FooterStyled>
  );
};

export default Footer;