import React from 'react';
import rockImage from '../images/rock.png';
import paperImage from '../images/paper.png';
import scissorsImage from '../images/scissors.png';

const ChoiceCard = ({ title, winner, shape, score, streak, direction }) => {
  // Card border
  let borderColor =
    winner === 'win'
      ? 'border-success'
      : winner === 'loss'
      ? 'border-danger'
      : winner === 'tie'
      ? 'border-dark'
      : '';

  // Card background color
  let backgroundColor =
    winner === 'win'
      ? 'background-success'
      : winner === 'loss'
      ? 'background-danger'
      : winner === 'tie'
      ? 'background-dark'
      : '';

  // Result
  let result =
    winner === 'win'
      ? 'WIN'
      : winner === 'loss'
      ? 'LOSS'
      : winner === 'tie'
      ? 'TIE'
      : '';

  // Image source
  let imgSource =
    shape === 'rock'
      ? rockImage
      : shape === 'paper'
      ? paperImage
      : shape === 'scissors'
      ? scissorsImage
      : '';

  // Image horizon direction
  let flipHorizontally = direction === 'west' ? 'flip-horizontally' : '';

  // Image alternative
  let imageAlt =
    shape === 'rock'
      ? 'Rock'
      : shape === 'paper'
      ? 'Paper'
      : shape === 'scissors'
      ? 'Scissors'
      : '';

  // Award
  if (streak === 3) {
    result = 'Flawless';
  }
  if (streak > 3) {
    result = `Combo ${streak}`;
  }

  return (
    <div
      className={`Choice-card text-center ${borderColor} ${backgroundColor}`}
    >
      <h2>{title}</h2>
      <div className={`Img-wrapper d-inline-block ${flipHorizontally}`}>
        <img src={imgSource} alt={imageAlt} />
      </div>
      <div>{result}</div>
    </div>
  );
};

export default ChoiceCard;
