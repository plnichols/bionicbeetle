import styled from 'styled-components';
import { color } from 'theme';
import { media } from '../../theme';

const BaseHeading = styled.span`
  margin: 0 0 1.25rem;
  line-height: 1.25;
  font-weight: 300;
  letter-spacing: -1px;
  color: ${color.text};
`;

const H1Styled = BaseHeading.withComponent('h1').extend`
  font-size: ${props => props.size || '9vw'};
  
  ${media.up.sm`
    font-size: 5.5rem;
  `};
`;

const H2Styled = BaseHeading.withComponent('h2').extend`
  font-size: ${props => props.size || '6.5vw'};
  margin-bottom: 1rem;
  
  ${media.up.sm`
    font-size: 4rem;
  `};
`;

const H3Styled = BaseHeading.withComponent('h3').extend`
  font-size: ${props => props.size || '5vw'};
  font-weight: 100;
  margin-bottom: 1rem;
  letter-spacing: -0.5px;
  color: ${color.grey.dark};
  
  ${media.up.sm`
    font-size: 3rem;
  `};
`;

const H4Styled = BaseHeading.withComponent('h4').extend`
  font-size: ${props => props.size || '4vw'};
  font-weight: 100;
  margin-bottom: 1rem;
  letter-spacing: -0.3px;
  color: ${color.grey.dark};
  
  ${media.up.sm`
    font-size: 2.5rem;
  `};
`;

const H5Styled = BaseHeading.withComponent('h5').extend`
  font-size: ${props => props.size || '3.5vw'};
  font-weight: 100;
  margin-bottom: 1.25rem;
  letter-spacing: -0.3px;
  color: ${color.grey.dark};
  
  ${media.up.sm`
    font-size: 2rem;
  `};
`;

const H6Styled = BaseHeading.withComponent('h6').extend`
  font-size: ${props => props.size || '3vw'};
  font-weight: 100;
  margin-bottom: 1.25rem;
  letter-spacing: -0.3px;
  color: ${color.grey.dark};
  
  ${media.up.sm`
    font-size: 1.5rem;
  `};
`;

export { H1Styled, H2Styled, H3Styled, H4Styled, H5Styled, H6Styled };
