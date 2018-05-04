import React from 'react';
import { shallow } from 'enzyme';
import ComparisonCard from './ComparisonCard';
import { comparisonObject } from '../../__mocks__/mockData';

const mockProps = {
  comparisonObject: comparisonObject
};

describe('ComparisonContainer', () => {
  let container;
  beforeEach(() => {
    container = shallow(<ComparisonCard {...mockProps} />);
  });

  it('matches snapshot', () => {
    expect(container).toMatchSnapshot();
  });
});
