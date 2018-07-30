import styled from 'styled-components';
import { color } from 'theme';

const marginObj = {
  tiny: '10px',
  small: '20px',
  medium: '40px',
  large: '80px',
  none: '0'
};

const DividerStyled = styled.hr`
  margin: ${props => (props.size ? marginObj[props.size] : '30px')} 0;
  height: 0;
  border: 0;
  border-bottom: 1px solid ${color.grey.lighter};
`;

export { DividerStyled };
