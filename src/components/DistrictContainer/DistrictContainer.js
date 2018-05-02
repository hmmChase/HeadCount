import React from 'react';
import Card from '../Card/Card';
import './DistrictContainer.css';

const DistrictContainer = ({ foundDistricts, toggleSelectedDistrict }) => {
  const districtCards = foundDistricts.map((district, index) => {
    return (
      <Card
        key={`Card ${index}`}
        {...district}
        toggleSelectedDistrict={toggleSelectedDistrict}
      />
    );
  });

  return <section className="cardContainer">{districtCards}</section>;
};

export default DistrictContainer;
