import React from 'react';
import { ListItemStyled } from './ListItem.styles';

const ListItem = ({ children }) => {
  return <ListItemStyled>{children}</ListItemStyled>;
};

export { ListItem };
