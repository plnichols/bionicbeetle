import React from 'react';
import { render, screen } from '@testing-library/react';
import Heading from './Heading';

test('renders nothing without correct prop', () => {
  render(<Heading>foo</Heading>);
  expect(screen.queryByText('foo')).not.toBeInTheDocument();
});

test('renders h1 and children', () => {
  render(<Heading h1>h1</Heading>);
  expect(screen.getByText('h1', { selector: 'h1' })).toBeInTheDocument();
});

test('renders h2 and children', () => {
  render(<Heading h2>h2</Heading>);
  expect(screen.getByText('h2', { selector: 'h2' })).toBeInTheDocument();
});

test('renders h3 and children', () => {
  render(<Heading h3>h3</Heading>);
  expect(screen.getByText('h3', { selector: 'h3' })).toBeInTheDocument();
});

test('renders h4 and children', () => {
  render(<Heading h4>h4</Heading>);
  expect(screen.getByText('h4', { selector: 'h4' })).toBeInTheDocument();
});

test('renders h5 and children', () => {
  render(<Heading h5>h5</Heading>);
  expect(screen.getByText('h5', { selector: 'h5' })).toBeInTheDocument();
});

test('renders h6 and children', () => {
  render(<Heading h6>h6</Heading>);
  expect(screen.getByText('h6', { selector: 'h6' })).toBeInTheDocument();
});
