import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import Supply from './Supply';

test('user can check off a supply', () => {
  render(<Supply text="disinfectant" />);
  const checkbox = screen.getByRole("checkbox");
  userEvent.click(checkbox)

  expect(checkbox).toBeInTheDocument();
})
