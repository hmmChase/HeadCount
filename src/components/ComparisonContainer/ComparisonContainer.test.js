import React from 'react';
import { shallow } from 'enzyme';
import ComparisonContainer from './ComparisonContainer';
import { mockCard1, mockCard2 } from "../../__mocks__/mockData";

const mockProps = {
  comparedDistricts: [mockCard1, mockCard2],
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
