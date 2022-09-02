import React from 'react';
import { render, screen } from '@testing-library/react';
import Content from './Content';

test('renders content and the children', () => {
  render(<Content>foo</Content>);
  expect(screen.getByText('foo')).toBeInTheDocument();
});
