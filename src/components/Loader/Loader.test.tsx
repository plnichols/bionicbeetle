import React from 'react';
import { render, screen } from '@testing-library/react';
import Loader from './Loader';

test('renders loader', () => {
  render(<Loader />);
  expect(screen.getByLabelText('loader')).toBeInTheDocument();
});
