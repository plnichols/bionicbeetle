import React from 'react';
import { Icon } from 'components';
import { LogoStyled } from './Logo.styles';

const Logo = () => {
  return (
    <LogoStyled>
      <Icon type="bionicbeetle" />
    </LogoStyled>
  );
};

export { Logo };
