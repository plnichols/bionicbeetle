import styled from 'styled-components';
import { media } from 'theme';

const ContentStyled = styled.div`
  padding: 0 20px;

  ${media.up.sm`
    padding: 0 40px;
  `};

  ${media.up.md`
    padding: 0;
  `};
`;

export { ContentStyled };
