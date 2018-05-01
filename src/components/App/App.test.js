import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import kinderData from '../../data/kindergartners_in_full_day_program';

import {shallow} from 'enzyme'

describe('App', () =>{
  let app

  beforeEach(() => {
    app = shallow(<App />, { disableLifecycleMethods: true })
  })
  
  it('matches snapshot', () => {
    expect(app).toMatchSnapshot()
  })

  describe('componentDidMount', () => {
    it('sets app state', () => {
      app.instance().componentDidMount()

      expect(app.state().foundDistricts).toHaveLength(181)
    })
  })

  describe('filterDistricts', () => {
    it('filters districts and is not case sensitive', () => {
      app.instance().filterDistricts('colo')

      expect(app.state().foundDistricts).toHaveLength(2)
    })
  })
})
