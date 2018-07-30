import { css } from 'styled-components';

export const media = {
  up: {
    xxs: (...args) => css`
      @media (min-width: 0px) {
        ${css(...args)};
      }
    `,
    xs: (...args) => css`
      @media (min-width: 576px) {
        ${css(...args)};
      }
    `,
    sm: (...args) => css`
      @media (min-width: 768px) {
        ${css(...args)};
      }
    `,
    md: (...args) => css`
      @media (min-width: 992px) {
        ${css(...args)};
      }
    `,
    lg: (...args) => css`
      @media (min-width: 1200px) {
        ${css(...args)};
      }
    `
  },
  down: {
    xxs: (...args) => css`
      @media (max-width: 0px) {
        ${css(...args)};
      }
    `,
    xs: (...args) => css`
      @media (max-width: 575px) {
        ${css(...args)};
      }
    `,
    sm: (...args) => css`
      @media (max-width: 767px) {
        ${css(...args)};
      }
    `,
    md: (...args) => css`
      @media (max-width: 991px) {
        ${css(...args)};
      }
    `,
    lg: (...args) => css`
      @media (max-width: 1199px) {
        ${css(...args)};
      }
    `
  },
  print: (...args) => css`
    @media print {
      ${css(...args)};
    }
  `
};
