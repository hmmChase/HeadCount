import React from 'react';
import Form from '../Form/Form'
const mockProps =  {
  filterDistricts: jest.fn() 
}

describe('Form', () => {
  let form
  beforeEach(() => {
    form = shallow(<Form {...mockProps} />)
  })
  
  it('matches snapshot', () => {
    expect(form).toMatchSnapshot()
  })

  describe('handleInputChange', () => {
    it('updates state when input is changes', () => {
      let input = form.find('input')

      input.simulate('change', {target : { value : 'hello'}})

      expect(form.state().searchInput).toEqual('hello')
    })

    it('should call filterDistricts on change', () => {
      const mockEvent = { target: { value: 'hello' } }
      form.instance().handleInputChange(mockEvent)

      expect(mockProps.filterDistricts).toHaveBeenCalled()
    })
  })
})

import { shallow } from 'enzyme'