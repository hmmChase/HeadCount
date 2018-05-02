import React from 'react';
import { shallow } from 'enzyme';
import ComparisonContainer from './ComparisonContainer';
const mockProps = {
  comparedDistricts: [1, 2],
  comparisonObject: {},
  changeSelectedDistricts: jest.fn()
};

describe('ComparisonContainer', () => {
  let container;
  beforeEach(() => {
    container = shallow(<ComparisonContainer {...mockProps} />);
  });

  it('matches snapshot', () => {
    expect(container).toMatchSnapshot();
  });
});