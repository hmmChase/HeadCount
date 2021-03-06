import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({
  location,
  stats,
  changeSelectedDistricts,
  clicked,
  average
}) => {
  let statsKeys = Object.keys(stats);
  let statsList = statsKeys.map((stat, index) => {
    const statColor = stats[stat] >= 0.5 ? 'aboveColor' : 'belowColor';
    return (
      <li key={`year ${index}`} className={statColor}>
        {stat} : {stats[stat]}
      </li>
    );
  });

  let isClicked;

  if (clicked) {
    isClicked = 'clicked card';
  } else {
    isClicked = 'card';
  }

  return (
    <article
      className={isClicked}
      onClick={() => changeSelectedDistricts(location)}
    >
      <h3>{location}</h3>
      <ul>{statsList}</ul>
      {clicked && <p>Average: {average}</p>}
    </article>
  );
};

Card.propTypes = {
  location: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
  changeSelectedDistricts: PropTypes.func.isRequired,
  clicked: PropTypes.bool,
  average: PropTypes.number.isRequired
};

export default Card;
