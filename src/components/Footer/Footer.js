import React from 'react';
import { Box } from 'components';
import { FooterCopyrightStyled } from './Footer.styles';

const Footer = () => {
  return (
    <Box mt={80} mb={20}>
      <FooterCopyrightStyled>
        &copy; 2019 Bionic Beetle Ltd &bull; Registered in England and Wales, no 09268216
      </FooterCopyrightStyled>
    </Box>
  );
};

export { Footer };
