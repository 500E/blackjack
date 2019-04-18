import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import { greenBorder } from '../styles';

const StyledHand = styled.div`
  background-color: papayawhip;
  ${greenBorder};
  padding: 1em;
  height: 40vh;
`;

const Paragraph = styled.p`font-weight: bold;`;

const Hand = ({ player, face, deck }) => (
  <StyledHand>
    <Paragraph>{player}</Paragraph>
    <Card face={face} deck={deck} />
  </StyledHand>
);

export default Hand;
