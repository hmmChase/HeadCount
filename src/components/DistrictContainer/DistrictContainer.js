import React from 'react';
import Card from '../Card/Card';
import PropTypes from 'prop-types'
import './DistrictContainer.css';

const DistrictContainer = ({ foundDistricts, changeSelectedDistricts, comparedDistricts }) => {
  const districtCards = foundDistricts.map((district, index) => {
    let clicked
    if (comparedDistricts.includes(district)) {
      clicked = true
    } else {
      clicked = false
    }
    return (
      <Card
        clicked={clicked}
        key={`Card ${index}`}
        {...district}
        changeSelectedDistricts={changeSelectedDistricts}
      />
    );
  });

  return <section className="cardContainer">{districtCards}</section>;
};

DistrictContainer.propTypes = {
  foundDistricts: PropTypes.array.isRequired
}

export default DistrictContainer;
