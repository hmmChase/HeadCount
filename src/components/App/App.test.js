import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import {
  mockCard1,
  mockCard2,
  mockCard3,
  comparisonObject
} from '../../__mocks__/mockData';

// const mockCard1 = {
//   location: 'COLORADO',
//   stats: {
//     '2004': 0.24,
//     '2005': 0.278,
//     '2006': 0.337,
//     '2007': 0.395,
//     '2008': 0.536,
//     '2009': 0.598,
//     '2010': 0.64,
//     '2011': 0.672,
//     '2012': 0.695,
//     '2013': 0.703,
//     '2014': 0.741
//   }
// };

// const mockCard2 = {
//   location: 'ACADEMY 20',
//   stats: {
//     '2004': 0.302,
//     '2005': 0.267,
//     '2006': 0.354,
//     '2007': 0.392,
//     '2008': 0.385,
//     '2009': 0.39,
//     '2010': 0.436,
//     '2011': 0.489,
//     '2012': 0.479,
//     '2013': 0.488,
//     '2014': 0.49
//   }
// };

// const mockCard3 = {
//   location: 'ADAMS COUNTY 14',
//   stats: {
//     2004: 0.228,
//     2005: 0.3,
//     2006: 0.293,
//     2007: 0.306,
//     2008: 0.673,
//     2009: 1,
//     2010: 1,
//     2011: 1,
//     2012: 1,
//     2013: 0.998,
//     2014: 1
//   }
// };

// // const mockFoundDistricts = [mockCard1, mockCard2];

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
