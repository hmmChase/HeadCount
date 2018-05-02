import React from 'react';
import './ComparisonContainer.css';
import Card from '../Card/Card';
import PropTypes from 'prop-types';


import ComparisonCard from '../ComparisonCard/ComparisonCard'
const ComparisonContainer = ({comparedDistricts, changeSelectedDistricts, comparisonObject}) => {
  const districtCards = comparedDistricts.map((district, index) => {
    return (
      <Card
        key={`Card ${index}`}
        {...district}
        changeSelectedDistricts={changeSelectedDistricts}
      />
    );
  })

  return (
    <section className="comparisonContainer">
      {(Object.keys(comparisonObject).length > 0) && <ComparisonCard comparisonObject={comparisonObject}/>}
      {districtCards}
    </section>
  )
};

ComparisonContainer.propTypes = {
  comparedDistricts: PropTypes.array.isRequired,
  changeSelectedDistricts: PropTypes.func.isRequired,
  comparisonObject: PropTypes.object.isRequired
};

export default ComparisonContainer;
