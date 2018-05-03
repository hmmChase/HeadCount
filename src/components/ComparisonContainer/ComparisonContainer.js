import React from 'react';
import './ComparisonContainer.css';
import Card from '../Card/Card';
import PropTypes from 'prop-types';
import ComparisonCard from '../ComparisonCard/ComparisonCard';

const ComparisonContainer = ({
  comparedDistricts,
  changeSelectedDistricts,
  comparisonObject
}) => {
  const districtCards = comparedDistricts.map((district, index) => {
    return (
      <Card
        clicked={true}
        key={`Card ${index}`}
        {...district}
        changeSelectedDistricts={changeSelectedDistricts}
      />
    );
  });

  return (
    <section className="comparisonContainer">
      {districtCards}
      {Object.keys(comparisonObject).length > 0 && (
        <ComparisonCard comparisonObject={comparisonObject} />
      )}
    </section>
  );
};

ComparisonContainer.propTypes = {
  comparedDistricts: PropTypes.array.isRequired,
  changeSelectedDistricts: PropTypes.func.isRequired,
  comparisonObject: PropTypes.object.isRequired
};

export default ComparisonContainer;
