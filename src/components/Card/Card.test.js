import React from 'react';
import { shallow, mount } from 'enzyme';
import Card from './Card';
// import { comparisonObject } from "../../__mocks__/mockData";

let mockProps = {
  location: 'lfjlsda',
  stats: {},
  changeSelectedDistricts: jest.fn(),
  clicked: false,
  average: 0.0343
};

describe('Card', () => {
  let card;
  beforeEach(() => {
    card = shallow(<Card {...mockProps} />);
  });

  it('matches snapshot', () => {
    expect(card).toMatchSnapshot();
  });

  it("not have a class of 'clicked' if the card has not been selected", () => {
    mockProps.clicked = false;

    expect(card.hasClass('clicked')).toEqual(false);
  });

  it("has a class of 'clicked' if the card has not been selected", () => {
    mockProps.clicked = true;
    card = shallow(<Card {...mockProps} />);

    expect(card.hasClass('clicked')).toEqual(true);
  });

  it('calls changeSelectedDistricts when card is clicked', () => {
    card = mount(<Card {...mockProps} />);
    card.find('.card').simulate('click');

    expect(card.prop('changeSelectedDistricts')).toHaveBeenCalledTimes(1);
  });
});
