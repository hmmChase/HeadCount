import React from 'react';
import DistrictContainer from './DistrictContainer';
import { shallow } from 'enzyme';
const mockProps = {
  comparedDistricts: [1, 2],
  foundDistricts: [],
  changeSelectedDistricts: jest.fn()
};

describe('DistrictsContainer', () => {
  let container;
  beforeEach(() => {
    container = shallow(<DistrictContainer {...mockProps} />);
  });

  it('matches snapshot', () => {
    expect(container).toMatchSnapshot();
  });
});
