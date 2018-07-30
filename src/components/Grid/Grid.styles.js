import styled from 'styled-components';
import { media } from 'theme';

const RowStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-top: -10px !important;
  margin-left: -10px !important;
`;

const ColStyled = styled.div`
  flex: 1 0 auto;
  width: 100%;
  padding: 10px 0 0 10px;

  ${props =>
    !(props.xs || props.sm || props.md || props.lg) &&
    media.up.xs`
    flex: 1;
  `};

  ${props =>
    props.xs &&
    media.up.xs`
    flex: none;
    width: ${(props.xs / 12) * 100 + '%'};
  `};

  ${props =>
    props.sm &&
    media.up.sm`
    flex: none;
    width: ${(props.sm / 12) * 100 + '%'};
  `};

  ${props =>
    props.md &&
    media.up.md`
    flex: none;
    width: ${(props.md / 12) * 100 + '%'};
  `};

  ${props =>
    props.lg &&
    media.up.lg`
    flex: none;
    width: ${(props.lg / 12) * 100 + '%'};
  `};
`;

export { RowStyled, ColStyled };
