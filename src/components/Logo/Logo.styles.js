import styled from 'styled-components';
import { media } from 'theme';

const LogoStyled = styled.div`
  text-align: left;

  svg {
    font-size: 70vw;

    ${media.up.sm`
      font-size: 45rem;
    `};
  }
`;

export { LogoStyled };
