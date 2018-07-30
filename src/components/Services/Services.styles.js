import styled from 'styled-components';
import { Icon } from 'components';
import { color } from 'theme';

const ServicesStyled = styled.ul`
  margin: 0;
  padding: 0;

  @media screen and (min-width: 576px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

const ServicesItemStyled = styled.li`
  display: flex;
  margin: 0 0 60px 0;
  padding: 0;

  @media screen and (min-width: 576px) {
    flex: 1 0 auto;
    max-width: 45%;
  }
`;

const ServicesIconStyled = styled(Icon)`
  margin: 0;
  padding: 0;
  font-size: 64px;
  fill: ${color.grey.dark};
`;

const ServicesInfoStyled = styled.div`
  flex: 1;
  margin-left: 20px;
  color: ${color.text};
`;

const ServicesNameStyled = styled.div`
  font-size: 2rem;
  font-weight: 500;
  line-height: 1;
`;

const ServicesDescStyled = styled.p`
  margin: 0.5em 0 0.25em 0;
  font-size: 1.6rem;
  font-weight: 100;
  line-height: 1.5;
`;

export {
  ServicesStyled,
  ServicesItemStyled,
  ServicesIconStyled,
  ServicesInfoStyled,
  ServicesNameStyled,
  ServicesDescStyled
};
