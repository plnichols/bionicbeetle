import React from 'react';
import { WithSpacing } from 'hoc';
import { BoxStyled } from './Box.styles';

const BoxComponent = ({ children, ...rest }) => {
  return <BoxStyled {...rest}>{children}</BoxStyled>;
};

const Box = WithSpacing(BoxComponent);

export { Box };
