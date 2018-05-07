import React from 'react';
import { shallow, mount } from 'enzyme';
import Card from './Card';
// import { comparisonObject } from "../../__mocks__/mockData";

let mockProps = {
  location: 'lfjlsda',
  stats: {},
  changeSelectedDistricts: jest.fn(),
  clicked: false,
  average: 0.034
};

describe('Card', () => {
  let card;
  beforeEach(() => {
    card = shallow(<Card {...mockProps} />);
  });

  it('matches snapshot', () => {
    expect(card).toMatchSnapshot();
  });

  it("doesn't have a class of 'clicked' if the card has not been selected", () => {
    mockProps.clicked = false;

    expect(card.hasClass('clicked')).toEqual(false);
  });

  it("has a class of 'clicked' if the card has not been selected", () => {
    mockProps.clicked = true;
    card = shallow(<Card {...mockProps} />);

    expect(card.hasClass('clicked')).toBe(true);
  });

  it('calls changeSelectedDistricts when card is clicked', () => {
    card = mount(<Card {...mockProps} />);
    card.find('.card').simulate('click');

    expect(card.prop('changeSelectedDistricts')).toHaveBeenCalledTimes(1);
  });

  it('if stat value < .5, span has class .belowColor ', () => {
    mockProps.stats = { 2004: 0.24 };
    card = mount(<Card {...mockProps} />);
    const liCard = card.find('li');

    expect(liCard.hasClass('belowColor')).toBe(true);
  });

  it('if stat value >= .5, span has class .aboveColor ', () => {
    mockProps.stats = { 2004: 0.74 };
    card = mount(<Card {...mockProps} />);
    const liCard = card.find('li');

    expect(liCard.hasClass('aboveColor')).toBe(true);
  });
});
