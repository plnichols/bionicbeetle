import React from 'react';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import App from './App';
import fetchMock from 'fetch-mock-jest';
import MockDate from 'mockdate';

afterEach(() => {
  fetchMock.reset();
});

test('renders main logo', () => {
  render(<App />);
  expect(screen.getByTitle('bionicbeetle')).toBeInTheDocument();
});

test('renders the main headers', () => {
  render(<App />);
  expect(screen.getByText('Front End Development', { selector: 'h1' })).toBeInTheDocument();
  expect(screen.getByText('Consultancy Services', { selector: 'h2' })).toBeInTheDocument();
  expect(screen.getByText('London, UK', { selector: 'h3' })).toBeInTheDocument();
});

test('renders the content headers', () => {
  render(<App />);
  expect(screen.getByText('Services', { selector: 'h2' })).toBeInTheDocument();
  expect(screen.getByText((content, element) => content.startsWith('Here'))).toBeInTheDocument();
});

test('renders the loading indicator when loading', async () => {
  const services = [{ icon: 'code' }];
  fetchMock.get('/data/services.json', services);

  render(<App />);
  expect(screen.getByLabelText('loader')).toBeInTheDocument();

  await waitForElementToBeRemoved(document.querySelector('[aria-label="loader"]')).then(() => {
    expect(screen.queryByLabelText('loader')).not.toBeInTheDocument();
  });
});

test('renders the services content', async () => {
  const services = [
    { icon: 'code', name: 'Development' },
    { icon: 'react', name: 'React' },
    { icon: 'mobile', name: 'Responsive UI' },
    { icon: 'javascript', name: 'Javascript' },
    { icon: 'css', name: 'CSS3' },
    { icon: 'webpack', name: 'Webpack' },
  ];
  fetchMock.get('/data/services.json', services, { overwriteRoutes: true });

  render(<App />);

  await waitForElementToBeRemoved(document.querySelector('[aria-label="loader"]')).then(() => {
    expect(screen.getByTitle('code')).toBeInTheDocument();
    expect(screen.getByTitle('react')).toBeInTheDocument();
    expect(screen.getByTitle('mobile')).toBeInTheDocument();
    expect(screen.getByTitle('javascript')).toBeInTheDocument();
    expect(screen.getByTitle('css')).toBeInTheDocument();
    expect(screen.getByTitle('webpack')).toBeInTheDocument();
  });
});

test('renders the contact elements', () => {
  render(<App />);
  expect(screen.getByText('Contact', { selector: 'h2' })).toBeInTheDocument();
  expect(screen.getByText((content, element) => content.startsWith('Get in touch'))).toBeInTheDocument();
  expect(screen.getByText('Email us', { selector: 'a' })).toBeInTheDocument();
});

test('renders the footer', () => {
  MockDate.set('2025-06-30');
  render(<App />);
  expect(screen.getByText('©', { exact: false })).toBeInTheDocument();
  expect(screen.getByText('2025', { exact: false })).toBeInTheDocument();
  expect(screen.getByText('Bionic Beetle Ltd', { exact: false })).toBeInTheDocument();
  expect(screen.getByText('Registered in England and Wales, no 09268216', { exact: false })).toBeInTheDocument();
});
