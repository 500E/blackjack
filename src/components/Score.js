import React from 'react';
import styled from 'styled-components';
import { greenBorder } from '../styles';

const ScoreBoard = styled.div`
  display: flex;
  flex-direction: column;
`;

const History = styled.div`
  background-color: papayawhip;
  ${greenBorder};
  text-align: left;
  padding: 0.5em;
  height: 30px;
  letter-spacing: 3px;
`;

const CurrentScore = styled.div`
  background-color: papayawhip;
  ${greenBorder};
  padding: 0.5em;
  letter-spacing: 1px;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  height: 30px;
`;

const Score = ({ score, history }) => (
  <ScoreBoard>
    <CurrentScore>{score}</CurrentScore>
    <History>{history}</History>
  </ScoreBoard>
);

export default Score;
