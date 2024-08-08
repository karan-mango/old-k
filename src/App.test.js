import { screen } from '@testing-library/react';

test('example test', () => {
  const element = screen.getByText(/learn react/i);
  expect(element).toBeInTheDocument();
});
