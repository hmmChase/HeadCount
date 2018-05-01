import React from 'react';
import Card from '../Card/Card';
import './DistrictContainer.css';

const DistrictContainer = ({ foundDistricts }) => {
  const districtCards = foundDistricts.map((district, index) => {
    return <Card key={`Card ${index}`} {...district} />;
  });

  return <section>{districtCards}</section>;
};

export default DistrictContainer;
