import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react';
import Recipe from '.'

const mockUseLocationValue = {
    pathname: "/testroute",
    search: '',
    hash: '',
    state: null
}

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => {
  const originalModule = jest.requireActual('react-router-dom');
  return {
    ...originalModule,
    useLocation: jest.fn().mockImplementation(() => {
        return mockUseLocationValue;
    }),
    useNavigate: () => mockedUsedNavigate,
  };
});

describe('Recipe', () => {

  it('should render component', () => {
    const { container } = render(<Recipe />)

    expect(container).toMatchSnapshot();
  })

  it('should remove the card when click the delete icon over the card', () => {
    render(<Recipe />)

    expect(screen.getByTestId('card-content-0')).toBeInTheDocument()
    expect(screen.getByTestId('delete-ic-0')).toBeInTheDocument();

    fireEvent.click(screen.getByTestId('delete-ic-0'))

    expect(screen.queryByTestId('card-content-0')).not.toBeInTheDocument()
  })
})