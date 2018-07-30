import React from 'react';
import { ContentStyled } from './Content.styles';

const Content = ({ children }) => {
  return <ContentStyled>{children}</ContentStyled>;
};

export { Content };
