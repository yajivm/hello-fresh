import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react';
import Menu from '.'

describe('Menu', () => {

  it('should render component', () => {
    const { container } = render(<Menu />)

    expect(container).toMatchSnapshot();
  })

  it('should remove the card when click the delete icon over the card', () => {
    render(<Menu />)

    expect(screen.getByTestId('card-content-67')).toBeInTheDocument();
    expect(screen.getByTestId('delete-ic-67')).toBeInTheDocument();

    fireEvent.click(screen.getByTestId('delete-ic-67'))

    expect(screen.queryByTestId('card-content-67')).not.toBeInTheDocument()
  })
})