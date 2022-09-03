import React from 'react';
import { render, screen } from '@testing-library/react';
import Divider from './Divider';

test('renders divider with no margin', () => {
  const { container } = render(<Divider />);
  expect(container.firstChild).not.toHaveStyle({});
});

test('renders divider with top margin', () => {
  const { container } = render(<Divider top={10} />);
  expect(container.firstChild).toHaveStyle({ marginTop: '10px' });
});

test('renders divider with bottom margin', () => {
  const { container } = render(<Divider bottom={20} />);
  expect(container.firstChild).toHaveStyle({ marginBottom: '20px' });
});

test('renders divider with top and bottom margin', () => {
  const { container } = render(<Divider top={30} bottom={40} />);
  expect(container.firstChild).toHaveStyle({ marginTop: '30px', marginBottom: '40px' });
});
