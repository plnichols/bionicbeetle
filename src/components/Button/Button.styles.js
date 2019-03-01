import styled, { css } from 'styled-components';
import { color } from 'theme';
import { rgba } from 'polished';

const ButtonStyled = styled.button`
  display: inline-block;
  padding: 8px 30px;
  color: white;
  text-align: center;
  font-size: 15px;
  font-weight: 500;
  line-height: 2;
  text-transform: uppercase;
  text-decoration: none;
  background-color: ${color.primary.base};
  border-radius: 4px;
  border: 1px solid ${color.primary.base};
  cursor: pointer;

  &:hover {
    background-color: ${color.primary.dark};
    border-color: ${color.primary.dark};
  }

  ${props =>
    props.secondary &&
    css`
      background-color: ${color.secondary.base};
      border-color: ${color.secondary.base};

      &:hover {
        background-color: ${color.secondary.dark};
        border-color: ${color.secondary.dark};
      }
    `};

  ${props =>
    props.white &&
    css`
      color: ${color.primary.base};
      background-color: white;
      border-color: white;

      &:hover {
        color: ${color.primary.dark};
        background-color: ${rgba('white', 0.8)};
        border-color: ${color.primary.light};
      }
    `};

  ${props =>
    props.outline &&
    css`
      background-color: transparent;
      color: ${props.white ? 'white' : props.secondary ? color.secondary.base : color.primary.base};
      border-color: ${props.white ? 'white' : props.secondary ? color.secondary.base : color.primary.base};

      &:hover {
        background-color: ${props.white ? 'white' : props.secondary ? color.secondary.dark : color.primary.dark};
        color: ${props.white ? color.primary.dark : 'white'};
        border-color: ${props.white ? 'white' : props.secondary ? color.secondary.dark : color.primary.dark};
      }
    `};

  ${props =>
    props.disabled &&
    css`
      color: white;
      background-color: ${rgba(color.grey.base, 0.6)};
      border-color: transparent;
      cursor: not-allowed;
      opacity: 0.8;

      &:hover {
        color: white;
        background-color: ${rgba(color.grey.base, 0.6)};
        border-color: transparent;
      }
    `};

  ${props =>
    props.rounded &&
    css`
      border-radius: 200px;
    `};

  ${props =>
    props.small &&
    css`
      font-size: 11px;
      padding: 3px 15px 2px;
    `};
`;

const AnchorComponent = ButtonStyled.withComponent('a');

const AnchorStyled = styled(AnchorComponent)`
  color: ${props => (props.white ? (props.outline ? 'white' : color.primary.dark) : 'white')};

  &:hover {
    color: ${props => (props.white ? color.primary.dark : 'white')};
  }
`;

export { ButtonStyled, AnchorStyled };
