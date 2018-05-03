import React from 'react';
import PropTypes from 'prop-types'
import './ComparisonCard.css'

const ComparisonCard = ({comparisonObject}) => {
  const keys = Object.keys(comparisonObject)
  return (
    <article className='comparisonCard'>
      <h4>{keys[0]} : {comparisonObject[keys[0]]} </h4> 
      <h4>{keys[1]} : {comparisonObject[keys[1]]} </h4>

      <h3>Comparison: {comparisonObject[keys[2]]}</h3>
    </article>
  )
}

ComparisonCard.propTypes = {
  comparisonObject: PropTypes.object.isRequired
}

export default ComparisonCard;