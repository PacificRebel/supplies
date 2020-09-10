import React from 'react';
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import renderer from 'react-test-renderer';

import SupplyList from './SupplyList'

test('user can add a supply', () => {
  render(<SupplyList />);

  const textBox = screen.getByRole("textbox");
  userEvent.type(textBox, "A test supply")
  userEvent.click(screen.getByText("Add supply to list"))
  const supply = screen.getByText("A test supply");

  expect(supply).toBeInTheDocument();

})

  test('renders correctly when there are no supplies', () => {
    const tree = renderer.create(<SupplyList />).toJSON();
    expect(tree).toMatchSnapshot();
  })
