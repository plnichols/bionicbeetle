import React from 'react';
import { WithSpacing } from 'hoc';
import { DividerStyled } from './Divider.styles';

const DividerComponent = ({ ...rest }) => {
  return <DividerStyled {...rest} />;
};

const Divider = WithSpacing(DividerComponent);

export { Divider };
