import React from 'react';
import { render, screen } from '@testing-library/react';
import Box from './Box';

test('renders Box and its children', () => {
  render(<Box>foo</Box>);
  expect(screen.getByText('foo', { selector: 'div' })).toBeInTheDocument();
});

describe('margin', () => {
  test('renders the styles', () => {
    render(<Box m={10}>box</Box>);
    expect(screen.getByText('box')).toHaveStyle({ margin: '10px' });
  });

  test('renders the x styles', () => {
    render(<Box mx={10}>box</Box>);
    expect(screen.getByText('box')).toHaveStyle({ margin: '0px 10px' });
  });

  test('renders the y styles', () => {
    render(<Box my={10}>box</Box>);
    expect(screen.getByText('box')).toHaveStyle({ margin: '10px 0px' });
  });

  test('renders the top styles', () => {
    render(<Box mt={10}>box</Box>);
    expect(screen.getByText('box')).toHaveStyle({ marginTop: '10px' });
  });

  test('renders the right styles', () => {
    render(<Box mr={10}>box</Box>);
    expect(screen.getByText('box')).toHaveStyle({ marginRight: '10px' });
  });

  test('renders the bottom styles', () => {
    render(<Box mb={10}>box</Box>);
    expect(screen.getByText('box')).toHaveStyle({ marginBottom: '10px' });
  });

  test('renders the left styles', () => {
    render(<Box ml={10}>box</Box>);
    expect(screen.getByText('box')).toHaveStyle({ marginLeft: '10px' });
  });
});

describe('padding', () => {
  test('renders the styles', () => {
    render(<Box p={10}>box</Box>);
    expect(screen.getByText('box')).toHaveStyle({ padding: '10px' });
  });

  test('renders the x styles', () => {
    render(<Box px={10}>box</Box>);
    expect(screen.getByText('box')).toHaveStyle({ padding: '0px 10px' });
  });

  test('renders the y styles', () => {
    render(<Box py={10}>box</Box>);
    expect(screen.getByText('box')).toHaveStyle({ padding: '10px 0px' });
  });

  test('renders the top styles', () => {
    render(<Box pt={10}>box</Box>);
    expect(screen.getByText('box')).toHaveStyle({ paddingTop: '10px' });
  });

  test('renders the right styles', () => {
    render(<Box pr={10}>box</Box>);
    expect(screen.getByText('box')).toHaveStyle({ paddingRight: '10px' });
  });

  test('renders the bottom styles', () => {
    render(<Box pb={10}>box</Box>);
    expect(screen.getByText('box')).toHaveStyle({ paddingBottom: '10px' });
  });

  test('renders the left styles', () => {
    render(<Box pl={10}>box</Box>);
    expect(screen.getByText('box')).toHaveStyle({ paddingLeft: '10px' });
  });
});
