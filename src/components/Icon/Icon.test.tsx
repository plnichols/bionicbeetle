import React from 'react';
import { render, screen } from '@testing-library/react';
import Icon from './Icon';

test('renders icon', () => {
  render(<Icon type="beetle" />);
  expect(screen.getByRole('presentation')).toBeInTheDocument();
});

test('renders the correct title', () => {
  render(<Icon type="beetle" />);
  expect(screen.getByText('beetle', { selector: 'title' })).toBeInTheDocument();
});
