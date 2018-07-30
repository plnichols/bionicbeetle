import React from 'react';
import { ListStyled, OrderedListStyled } from './List.styles';

const List = ({ ordered, children }) => {
  if (ordered) {
    return <OrderedListStyled>{children}</OrderedListStyled>;
  }

  return <ListStyled>{children}</ListStyled>;
};

export { List };
