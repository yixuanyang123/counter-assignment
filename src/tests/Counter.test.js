import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component before each test
  render(<Counter />);
});

test('renders counter message', () => {
  // Check if the 'Counter' text is rendered
  expect(screen.getByText(/counter/i)).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // The Counter component must have an element with the data-testid 'count'
  expect(screen.getByTestId('count')).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  // Click the increment button based on its text content
  fireEvent.click(screen.getByText(/^\+$/));
  expect(screen.getByTestId('count')).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  fireEvent.click(screen.getByText(/^\+$/));
  fireEvent.click(screen.getByText(/^\-$/)); // The ^ and $ ensure no other text is included
  expect(screen.getByTestId('count')).toHaveTextContent('0');
});

