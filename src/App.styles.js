import styled from 'styled-components';
import { injectGlobal } from 'styled-components';
import styledNormalize from 'styled-normalize';
import { rgba, lighten } from 'polished';
import { color, font, media } from 'theme';

injectGlobal`
  ${styledNormalize}
  
  html {
    font-size: 62.5%;
    box-sizing: border-box;
  }
  
  *, 
  *:before, 
  *:after {
    box-sizing: inherit;
  }
  
  body {
    margin: 0;
    padding: 0;
    font-size: 1.6em;
    line-height: 1.6;
    font-weight: 300;
    font-family: ${font.base};
    color: ${color.text};
    border-top: 5px solid ${color.primary.base};
    background: white;
    background: repeat-x linear-gradient(to bottom, ${lighten(0.15, color.primary.lighter)}, white) 0 0;
    background-size: 100% 100px; 
  }
  
  strong {
    font-weight: 700;
  }
  
  a {
    color: white;
    text-decoration: underline;
    
    &:hover {
      color: ${color.primary.light};
    }
  }
  
  table {
    width: 100%;
    margin: 0;
    border-spacing: 0;
    border-collapse: collapse;
  }
  
  th {
    font-weight: 500;
    color: white;
    text-align: left;
    border-bottom: 1px solid ${rgba(color.primary.light, 0.5)};
  }
  
  td {
    color: ${rgba('white', 0.75)};
    border-top: 1px solid ${rgba(color.primary.light, 0.25)};
  }
  
  td, th {
    padding: 10px 5px;
    text-align: left;
    vertical-align: top;
  }
  
  ${media.down.xs`
    tr, td, th {
      display: block;
    }
  
    tr {
      padding: 10px 0;
      border-top: 1px solid ${rgba(color.primary.light, 0.5)};
    }
    tr:first-child {
      border-top: 0;
    }
  
    thead {
      display: none;
    }
  
    td {
      clear: both;
      border: none;
    }
  
    td, th {
      padding: 5px 0;
    }
  `};
`;

const AppStyled = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 912px;
  min-height: 100vh;
`;

export { AppStyled };
