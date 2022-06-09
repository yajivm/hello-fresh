import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import NavItem from '.'

jest.mock('react-router-dom', () => {
  const originalModule = jest.requireActual('react-router-dom');
  return {
    ...originalModule,
    Link: props => <div {...props}></div>,
  };
});


const mockOnClick = jest.fn();
const props = {
  title: 'ATitle',
  isCurrentTabActive: true,
  to: 'path',
  onClick: mockOnClick
}

describe('NavItem', () => {

  it('should render component', () => {
    const { container } = render(<NavItem {...props} />)

    expect(container).toMatchSnapshot();
  })

  it('should call onclick prop when on click the nav item', () => {
    render(<NavItem  {...props} />)

    expect(screen.getByTestId('ATitle')).toBeInTheDocument()

    fireEvent.click(screen.getByTestId('ATitle'))

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  })
})