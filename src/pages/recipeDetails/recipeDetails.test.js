import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react';
import Recipe from '.'

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => {
  const originalModule = jest.requireActual('react-router-dom');
  return {
    ...originalModule,
    useNavigate: () => mockNavigate,
    useLocation: () => ({ search: '?id=1' }),
  };
});

describe('Recipe Details', () => {
  it('should render component', () => {
    const { container } = render(<Recipe />)

    expect(container).toMatchSnapshot();
  })

  it('should navigate to recipe list page when click the recipe bread crumb', () => {
    render(<Recipe />)

    fireEvent.click(screen.getByTestId('recipe-bread-crumb'))

    expect(mockNavigate).toHaveBeenCalledWith('/hello-fresh/recipes-list');
  })
})