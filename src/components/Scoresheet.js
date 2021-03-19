import React from 'react';

const Scoresheet = ({
  playerScore,
  computerScore,
  playerScoreAnimation,
  computerScoreAnimation,
}) => {
  return (
    <div className="Scoresheet">
      <div className={playerScoreAnimation}>{playerScore}</div>-
      <div className={computerScoreAnimation}>{computerScore}</div>
    </div>
  );
};

export default Scoresheet;
