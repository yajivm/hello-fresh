import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Card from '.'

const mockClickCard = jest.fn();
const mockClickDeleteIc = jest.fn();

const props = {
  id: 0,
  imageSrc: 'https://img.hellofresh.com/c_fill,f_auto,fl_lossy,h_432,q_auto,w_768/hellofresh_s3/image/garlic-herb-beef-burger-eeb7543e.jpg',
  title: 'Garlic & Herb Beef Burger with Fries',
  description: 'with Apple Slaw, BBQ Mayo & Almonds',
  onClickCard: mockClickCard,
}

describe('Card', () => {

  it('should render component', () => {
    const { container } = render(<Card {...props} />)

    expect(container).toMatchSnapshot();
  })

  it('should call onClick prop card when click card', () => {
    render(<Card {...props} />)

    fireEvent.click(screen.getByTestId('card-content-0'))

    expect(mockClickCard).toHaveBeenCalledTimes(1);
  })

  it('should show delete icon when showActionIcons prop is true', () => {
    const customProps = {
      ...props,
      showActionIcons: true,
      onClickDeleteIcon: mockClickDeleteIc
    }
    render(<Card {...customProps} />)

    expect(screen.getByTestId('delete-ic-0')).toBeInTheDocument();

    fireEvent.click(screen.getByTestId('delete-ic-0'))

    expect(mockClickDeleteIc).toHaveBeenCalledTimes(1);
  })

  it('should not show description text when description prop is false', () => {
    const customProps = {
      id: 0,
      imageSrc: 'https://img.hellofresh.com/c_fill,f_auto,fl_lossy,h_432,q_auto,w_768/hellofresh_s3/image/garlic-herb-beef-burger-eeb7543e.jpg',
      title: 'Garlic & Herb Beef Burger with Fries',
      onClickCard: mockClickCard,
    }
    render(<Card {...customProps} />)

    expect(screen.queryByTestId('card-description-0')).not.toBeInTheDocument();
  })
})