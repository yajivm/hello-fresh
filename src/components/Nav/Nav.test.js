import React from 'react'
import { render } from '@testing-library/react'
import Nav from '.'

jest.mock('react-router-dom', () => {
  const originalModule = jest.requireActual('react-router-dom');
  return {
    ...originalModule,
    Link: props => <div {...props}></div>,
  };
});

const props = {
  navList: [
    {
      title: 'Test',
      path: '/',
    }
  ]
}

describe('Nav', () => {

  it('should render component', () => {
    const { container } = render(<Nav {...props} />)

    expect(container).toMatchSnapshot();
  })
})