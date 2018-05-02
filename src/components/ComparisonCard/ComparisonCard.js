import React from 'react';

const ComparisonCard = ({comparisonObject}) => {
  const keys = Object.keys(comparisonObject)
  return (
    <article>
      <h4>{keys[0]} : {comparisonObject[keys[0]]} </h4> 
      <h4>{keys[1]} : {comparisonObject[keys[1]]} </h4>

      <h3>Comparison: {comparisonObject[keys[2]]}</h3>
    </article>
  )
}

export default ComparisonCard