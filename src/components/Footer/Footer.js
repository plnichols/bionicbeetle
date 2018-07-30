import React from 'react';
import { Box } from 'components';
import { FooterCopyrightStyled } from './Footer.styles';

const Footer = () => {
  return (
    <Box mt={80} mb={20}>
      <FooterCopyrightStyled>&copy; 2018 Bionic Beetle Ltd</FooterCopyrightStyled>
    </Box>
  );
};

export { Footer };
