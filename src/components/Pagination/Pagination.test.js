import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import Pagination from '.'

const mockClickBackIc = jest.fn();
const mockClickForwardIc = jest.fn();
const props = {
  page: 'title',
  showBackIc: true,
  showForwardIc: true,
  onClickBackIc: mockClickBackIc,
  onClickForwardIc: mockClickForwardIc,
}

describe('Pagination', () => {

  it('should render the component', () => {
    const { container } = render(<Pagination {...props} />);

    expect(screen.getByTestId('page-number-title')).toHaveTextContent('title');
    expect(container).toMatchSnapshot();
  })

  it('should not show icons when prop values are false', () => {
    const customProps = {
      page: 'title',
      onClickBackIc: mockClickBackIc,
      onClickForwardIc: mockClickForwardIc,
    };
    render(<Pagination {...customProps} />);

    expect(screen.queryByTestId('back-ic')).toHaveStyle({ visibility: 'hidden' });
    expect(screen.queryByTestId('forward-ic')).toHaveStyle({ visibility: 'hidden' });
  })

  it('should trigger callback methods when icons been clicked', () => {
    render(<Pagination {...props} />);

    fireEvent.click(screen.getByTestId('back-ic'));

    expect(mockClickBackIc).toHaveBeenCalledTimes(1);

    fireEvent.click(screen.getByTestId('forward-ic'));

    expect(mockClickForwardIc).toHaveBeenCalledTimes(1);
  })
});