import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { vi } from 'vitest';
import App from './App';

vi.mock('react-awesome-reveal', () => ({
  Fade: ({ children }) => children,
}));

test('renders the portfolio heading', () => {
  const { getByRole } = render(<App />);
  const heading = getByRole('heading', { name: 'Eirin.Gonzales' });
  expect(heading).toBeInTheDocument();
});

test('smoothly scrolls to the contact section from the hero link', () => {
  const scrollIntoView = vi.fn();
  const originalMatchMedia = window.matchMedia;
  window.matchMedia = vi.fn().mockReturnValue({ matches: false });
  HTMLElement.prototype.scrollIntoView = scrollIntoView;
  const { getByRole } = render(<App />);

  fireEvent.click(getByRole('link', { name: "Let's chat" }));

  expect(scrollIntoView).toHaveBeenCalledWith({
    behavior: 'smooth',
    block: 'center',
  });

  window.matchMedia = originalMatchMedia;
});

test('uses instant scrolling when reduced motion is preferred', () => {
  const scrollIntoView = vi.fn();
  const originalMatchMedia = window.matchMedia;
  window.matchMedia = vi.fn().mockReturnValue({ matches: true });
  HTMLElement.prototype.scrollIntoView = scrollIntoView;
  const { getByRole } = render(<App />);

  fireEvent.click(getByRole('link', { name: "Let's chat" }));

  expect(scrollIntoView).toHaveBeenCalledWith({
    behavior: 'auto',
    block: 'center',
  });

  window.matchMedia = originalMatchMedia;
});
