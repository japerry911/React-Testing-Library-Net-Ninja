import { render, screen } from '@testing-library/react';
import Header from '../Header';

test('renders correct header text', () => {
  render(<Header title="My Header" />);

  const headingElement = screen.getByText(/My Header/i);
  expect(headingElement).toBeInTheDocument();
});

test('renders header, finds by role', () => {
  render(<Header title="My Header" />);

  const headingElement = screen.getByRole('heading', { name: 'My Header' });
  expect(headingElement).toBeInTheDocument();
});
