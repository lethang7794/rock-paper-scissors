import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useState } from 'react';
import { Container, Row, Col, ButtonGroup, Button } from 'react-bootstrap';
import SiteNavbar from './components/SiteNavbar';
import ChoiceCard from './components/ChoiceCard';
import Scoresheet from './components/Scoresheet';

function App() {
  const shapes = ['rock', 'paper', 'scissors'];

  const [playerChoice, setPlayerChoice] = useState('rock');
  const [playerResult, setPlayerResult] = useState('tie');
  const [playerScore, setPlayerScore] = useState(0);
  const [playerStreak, setPlayerStreak] = useState(0);

  const [computerChoice, setComputerChoice] = useState('rock');
  const [computerResult, setComputerResult] = useState('tie');
  const [computerScore, setComputerScore] = useState(0);

  // const [lastWinner, setLastWinner] = useState('');

  const [playerScoreAnimation, setPlayerScoreAnimation] = useState('initial');
  const [computerScoreAnimation, setComputerScoreAnimation] = useState(
    'initial'
  );

  const randomMove = (move) => {
    // const newPlayerChoice = shapes[Math.floor(Math.random() * 3)];
    const newPlayerChoice = move;
    const newComputerChoice = shapes[Math.floor(Math.random() * 3)];
    // const newComputerChoice = 'scissors';

    setPlayerChoice(newPlayerChoice);
    setComputerChoice(newComputerChoice);

    whoWins(newPlayerChoice, newComputerChoice);
  };

  const whoWins = (playerChoice, computerChoice) => {
    let playerResult, computerResult, winner;

    if (computerChoice === playerChoice) {
      computerResult = 'tie';
      playerResult = 'tie';
    } else if (computerChoice === 'rock') {
      if (playerChoice === 'paper') {
        computerResult = 'loss';
        playerResult = 'win';
        winner = 'player';
      } else {
        computerResult = 'win';
        playerResult = 'loss';
        winner = 'computer';
      }
    } else if (computerChoice === 'paper') {
      if (playerChoice === 'scissors') {
        computerResult = 'loss';
        playerResult = 'win';
        winner = 'player';
      } else {
        computerResult = 'win';
        playerResult = 'loss';
        winner = 'computer';
      }
    } else {
      if (playerChoice === 'rock') {
        computerResult = 'loss';
        playerResult = 'win';
        winner = 'player';
      } else {
        computerResult = 'win';
        playerResult = 'loss';
        winner = 'computer';
      }
    }

    // setLastWinner(winner);
    setPlayerResult(playerResult);
    setComputerResult(computerResult);

    // if (computerResult === 'win') setComputerScore(computerScore + 1);
    if (playerResult === 'win') {
      // setPlayerScore(playerScore + 1);
      setPlayerStreak(playerStreak + 1);
    } else {
      setPlayerStreak(0);
    }

    console.log('playerResult: ', playerResult);
    console.log('computerResult: ', computerResult);
    console.log(winner);

    if (winner === 'player') {
      // 1. Old number goes up
      setTimeout(() => setPlayerScoreAnimation('goUp'), 300);
      // 2. Incrementing the counter
      setTimeout(() => setPlayerScore(playerScore + 1), 400);
      // 3. New number waits down
      setTimeout(() => setPlayerScoreAnimation('waitDown'), 400);
      // 4. New number stays in the middle
      setTimeout(() => setPlayerScoreAnimation('initial'), 500);
    }

    if (winner === 'computer') {
      // 1. Old number goes up
      setTimeout(() => setComputerScoreAnimation('goUp'), 300);
      // 2. Incrementing the counter
      setTimeout(() => setComputerScore(computerScore + 1), 400);
      // 3. New number waits down
      setTimeout(() => setComputerScoreAnimation('waitDown'), 400);
      // 4. New number stays in the middle
      setTimeout(() => setComputerScoreAnimation('initial'), 500);
    }
  };

  const restart = () => {
    setPlayerChoice('rock');
    setPlayerResult('tie');
    setPlayerScore(0);

    setComputerChoice('rock');
    setComputerResult('tie');
    setComputerScore(0);
  };

  return (
    <div className='App -d-flex -flex-column -min-vh-100'>
      <SiteNavbar className='SiteNavbar' />
      <Container className='Container flex-grow-1 d-flex flex-column'>
        <Row xs={1} md={3} className='Main h-100 flex-grow-1'>
          <Col md={5}>
            <ChoiceCard
              title='YOU'
              winner={playerResult}
              shape={playerChoice}
              score={playerScore}
              streak={playerStreak}
            />
          </Col>
          <Col md={2}>
            <Scoresheet
              playerScore={playerScore}
              computerScore={computerScore}
              playerScoreAnimation={playerScoreAnimation}
              computerScoreAnimation={computerScoreAnimation}
            />
          </Col>
          <Col md={5}>
            <ChoiceCard
              title='💻'
              winner={computerResult}
              shape={computerChoice}
              score={computerScore}
              direction='west'
            />
          </Col>
        </Row>
        <Row>
          <Col md={5}>
            {/* <Button className="Button my-3 d-block mx-auto" onClick={play}>Random</Button> */}
            <div className='ButtonGroup-wrapper d-flex justify-content-center'>
              <ButtonGroup>
                <Button
                  variant='outline-dark'
                  className='mx-1'
                  onClick={() => randomMove('rock')}
                >
                  Play 👊
                </Button>
                <Button
                  variant='outline-dark'
                  className='mx-1'
                  onClick={() => randomMove('paper')}
                >
                  Play 🤚
                </Button>
                <Button
                  variant='outline-dark'
                  className='mx-1'
                  onClick={() => randomMove('scissors')}
                >
                  Play ✌
                </Button>
                <Button
                  variant='outline-dark'
                  className='mx-1'
                  onClick={() => restart()}
                >
                  RESTART
                </Button>
              </ButtonGroup>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
