import React from 'react';
import DistrictContainer from './DistrictContainer';
import { shallow, mount } from 'enzyme';
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

  it('assigns a clicked class to the appropriate card', () => {
    container = mount(<DistrictContainer 
      {...mockProps} 
      comparedDistricts={[{ average: 0.407, location: "ACADEMY 20", stats: {}}]} foundDistricts={[{ average: 0.407, location: "ACADEMY 20", stats: {}}]} />);

    const card = container.find('article');
    expect(card.hasClass('clicked')).toBe(true);
  });
});
