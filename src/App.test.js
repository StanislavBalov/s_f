import { render, screen } from '@testing-library/react';
import App from './App';

test('renders product card with product name', () => {
  render(<App />);
  const productName = screen.getByText(/Leonard coat/i);
  expect(productName).toBeInTheDocument();
});
