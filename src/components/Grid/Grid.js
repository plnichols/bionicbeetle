import React from 'react';
import { WithSpacing } from 'hoc';
import { RowStyled, ColStyled } from './Grid.styles';

const RowComponent = ({ children, ...rest }) => {
  return <RowStyled {...rest}>{children}</RowStyled>;
};

const Row = WithSpacing(RowComponent);

const Col = ({ children, ...rest }) => {
  return <ColStyled {...rest}>{children}</ColStyled>;
};

export { Row, Col };
