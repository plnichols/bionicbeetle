import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';

test('renders content in a <button /> element', () => {
  render(<Button>foo</Button>);
  expect(screen.getByText('foo', { selector: 'button' })).toBeInTheDocument();
});

test('renders content in an anchor <a /> element', () => {
  render(<Button anchor>foo</Button>);
  expect(screen.getByText('foo', { selector: 'a' })).toBeInTheDocument();
});

test('renders anchor <a /> element with href prop', () => {
  const href = 'http://www.aaa.com';

  render(
    <Button anchor href={href}>
      foo
    </Button>
  );
  expect(screen.getByText('foo', { selector: 'a' })).toHaveAttribute('href', href);
});
