import React from 'react';
import { render, screen } from '@testing-library/react';
import Greeting from "../Greeting";

test('renders learn react link', () => {
   // GIVEN
  render(<Greeting name={"test 1"} />);

    // WHEN

    // THEN
  const linkElement = screen.queryByText(/salam, test 1/i);
  expect(linkElement).toBeInTheDocument();
});
