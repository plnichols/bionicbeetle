import React from 'react';
import { H1Styled, H2Styled, H3Styled, H4Styled, H5Styled, H6Styled } from './Heading.styles';

const Heading = ({ h1, h2, h3, h4, h5, h6, size, children }) => {
  if (h1) return <H1Styled {...size && { size }}>{children}</H1Styled>;
  if (h2) return <H2Styled {...size && { size }}>{children}</H2Styled>;
  if (h3) return <H3Styled {...size && { size }}>{children}</H3Styled>;
  if (h4) return <H4Styled {...size && { size }}>{children}</H4Styled>;
  if (h5) return <H5Styled {...size && { size }}>{children}</H5Styled>;
  if (h6) return <H6Styled {...size && { size }}>{children}</H6Styled>;

  return <H1Styled>{children}</H1Styled>;
};

export { Heading };
