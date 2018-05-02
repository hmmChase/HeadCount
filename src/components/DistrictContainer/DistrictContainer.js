import React from 'react';
import Card from '../Card/Card';
import './DistrictContainer.css';

const DistrictContainer = ({ foundDistricts, changeSelectedDistricts }) => {
  const districtCards = foundDistricts.map((district, index) => {
    return (
      <Card
        key={`Card ${index}`}
        {...district}
        changeSelectedDistricts={changeSelectedDistricts}
      />
    );
  });

  return <section className="cardContainer">{districtCards}</section>;
};

export default DistrictContainer;
