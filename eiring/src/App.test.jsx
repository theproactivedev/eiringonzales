import React from 'react';
import { render } from '@testing-library/react';
import { vi } from 'vitest';
import App from './App';

vi.mock('react-awesome-reveal', () => ({
  Fade: ({ children }) => children,
}));

test('renders the portfolio heading', () => {
  const { getByRole } = render(<App />);
  const heading = getByRole('heading', { name: 'Eirin Gonzales' });
  expect(heading).toBeInTheDocument();
});
