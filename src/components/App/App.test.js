import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import {
  mockCard1,
  mockCard2,
  mockCard3,
  comparisonObject
} from '../../__mocks__/mockData';


describe('App', () => {
  let app;

  beforeEach(() => {
    app = shallow(<App />, { disableLifecycleMethods: true });
  });

  it('matches snapshot', () => {
    expect(app).toMatchSnapshot();
  });

  describe('componentDidMount', () => {
    it('sets app state', () => {
      app.instance().componentDidMount();

      expect(app.state().foundDistricts).toHaveLength(181);
    });
  });

  describe('filterDistricts', () => {
    it('filters districts and is not case sensitive', () => {
      app.instance().filterDistricts('colo');

      expect(app.state().foundDistricts).toHaveLength(2);
    });
  });

  describe('changeSelectedDistricts', () => {
    it('should remove duplicates', () => {
      const expectedResult = [mockCard2];
      app.setState({
        comparedDistricts: [mockCard1, mockCard2]
      });
      app.instance().changeSelectedDistricts(mockCard1.location);
      app.update();
      expect(app.state().comparedDistricts).toEqual(expectedResult);
    });

    it('should add to comparison array', () => {
      const expectedResult = [mockCard2];
      app.instance().changeSelectedDistricts(mockCard2.location);

      expect(app.state().comparedDistricts).toEqual(expectedResult);
    });

    it('calls updateComparedDistricts when there are two compared districts', () => {
      app.setState({
        comparedDistricts: [mockCard1, mockCard2]
      });
      app.instance().updateComparedDistricts = jest.fn();
      app.instance().changeSelectedDistricts(mockCard3.location);

      expect(app.instance().updateComparedDistricts).toHaveBeenCalledTimes(1);
    });

    it('replaces second card when there are two', () => {
      app.setState({
        comparedDistricts: [mockCard1, mockCard2]
      });
      const expectedResult = [mockCard1, mockCard3];

      app.instance().changeSelectedDistricts(mockCard3.location);

      expect(app.state().comparedDistricts).toEqual(expectedResult);
    });

    it('adds a card when state.comparedDistricts is < 2 and card is not a duplicate', () => {
      expect(app.state().comparedDistricts).toEqual([]);
      const mockState = [mockCard1];
      app.instance().changeSelectedDistricts(mockCard1.location);

      expect(app.state().comparedDistricts).toEqual(mockState);
    });

    it('calls updateComparedDistricts when state.comparedDistricts < 2 and not a duplicate', () => {
      expect(app.state().comparedDistricts).toEqual([]);
      app.instance().updateComparedDistricts = jest.fn();
      app.instance().changeSelectedDistricts(mockCard1.location);

      expect(app.instance().updateComparedDistricts).toHaveBeenCalledTimes(1);
    });
  });

  describe('updateComparedDistricts', () => {
    it('sets state.comparedDistricts to whatever state its given', () => {
      const mockState = [mockCard1];
      app.instance().updateComparedDistricts(mockState);

      expect(app.state().comparedDistricts).toEqual(mockState);
    });

    it('calls runComparison if state.comparedDistricts has a length of >= 1', () => {
      const mockState = [mockCard1, mockCard2];
      app.setState({ comparedDistricts: mockState });
      app.instance().runComparison = jest.fn();
      app.instance().updateComparedDistricts(app.state().comparedDistricts);

      expect(app.instance().runComparison).toHaveBeenCalledTimes(1);
    });
  });
  describe('runComparison', () => {
    it('creates a comparedObject ', () => {
      const mockState = [mockCard2, mockCard3];
      app.setState({ comparedDistricts: mockState });

      app.instance().runComparison();

      expect(app.state().comparisonObject).toEqual(comparisonObject);
    });
  });
});
