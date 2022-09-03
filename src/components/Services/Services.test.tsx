import React from 'react';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import Services from './Services';
import fetchMock from 'fetch-mock-jest';

afterEach(() => {
  fetchMock.reset();
});

const services = [
  { icon: 'code', name: 'name code', description: 'desc code' },
  { icon: 'react', name: 'name react', description: 'desc react' },
  { icon: 'mobile', name: 'name mobile', description: 'desc mobile' },
  { icon: 'javascript', name: 'name javascript', description: 'desc javascript' },
  { icon: 'css', name: 'name css', description: 'desc css' },
  { icon: 'webpack', name: 'name webpack', description: 'desc webpack' },
];

test('renders loader component before data is loaded', () => {
  render(<Services />);
  expect(screen.getByLabelText('loader')).toBeInTheDocument();
});

test('renders services after data is loaded', async () => {
  fetchMock.get('/data/services.json', services);

  render(<Services />);

  expect(screen.queryByTitle('code')).not.toBeInTheDocument();
  expect(screen.queryByTitle('react')).not.toBeInTheDocument();
  expect(screen.queryByTitle('mobile')).not.toBeInTheDocument();
  expect(screen.queryByTitle('javascript')).not.toBeInTheDocument();
  expect(screen.queryByTitle('css')).not.toBeInTheDocument();
  expect(screen.queryByTitle('webpack')).not.toBeInTheDocument();

  await waitForElementToBeRemoved(document.querySelector('[aria-label="loader"]')).then(() => {
    expect(screen.getByTitle('code')).toBeInTheDocument();
    expect(screen.getByText('name code')).toBeInTheDocument();
    expect(screen.getByText('desc code')).toBeInTheDocument();

    expect(screen.getByTitle('react')).toBeInTheDocument();
    expect(screen.getByText('name react')).toBeInTheDocument();
    expect(screen.getByText('desc react')).toBeInTheDocument();

    expect(screen.getByTitle('mobile')).toBeInTheDocument();
    expect(screen.getByText('name mobile')).toBeInTheDocument();
    expect(screen.getByText('desc mobile')).toBeInTheDocument();

    expect(screen.getByTitle('javascript')).toBeInTheDocument();
    expect(screen.getByText('name javascript')).toBeInTheDocument();
    expect(screen.getByText('desc javascript')).toBeInTheDocument();

    expect(screen.getByTitle('css')).toBeInTheDocument();
    expect(screen.getByText('name css')).toBeInTheDocument();
    expect(screen.getByText('desc css')).toBeInTheDocument();

    expect(screen.getByTitle('webpack')).toBeInTheDocument();
    expect(screen.getByText('name webpack')).toBeInTheDocument();
    expect(screen.getByText('desc webpack')).toBeInTheDocument();
  });
});
