import React from 'react';
import Card from '../Card/Card';
import PropTypes from 'prop-types';
import './DistrictContainer.css';

const DistrictContainer = ({
  foundDistricts,
  changeSelectedDistricts,
  comparedDistricts
}) => {
  const districtCards = foundDistricts.map((district, index) => {
    let clicked;
    const comparedNames = comparedDistricts.map(district => district.location)
    if (comparedNames.includes(district.location)) {
      clicked = true;
    } else {
      clicked = false;
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
  foundDistricts: PropTypes.array.isRequired,
  changeSelectedDistricts: PropTypes.func.isRequired,
  comparedDistricts: PropTypes.array.isRequired
};

export default DistrictContainer;
