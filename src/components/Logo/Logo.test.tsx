import React from 'react';
import { render, screen } from '@testing-library/react';
import Logo from './Logo';

test('renders the logo', () => {
  render(<Logo />);
  expect(screen.getByRole('presentation')).toBeInTheDocument();
  expect(screen.getByText('bionicbeetle', { selector: 'title' })).toBeInTheDocument();
});
