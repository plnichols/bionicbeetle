import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import MockDate from 'mockdate';

test('renders footer content with correct year', () => {
  MockDate.set('2000-10-20');

  const { container } = render(<Footer />);
  expect(container.firstChild).toHaveTextContent(
    '© 2000 Bionic Beetle Ltd • Registered in England and Wales, no 09268216'
  );
});
