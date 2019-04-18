import React from 'react';
import styled from 'styled-components';

const StyledInterface = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: papayawhip;
`;

export const Button = styled.button`
  font-size: 0.8rem;
  background: transparent;
  border-radius: 3px;
  border: 2px solid mediumseagreen;
  color: mediumseagreen;
  margin: 1em;
  padding: 0.25em 1em;
  cursor: pointer;
  transition: color 0.4s, background-color 0.4s;
  &:hover {
    color: white;
    background-color: mediumseagreen;
  }
  &:disabled {
    pointer-events: none;
    opacity: 0.4;
  }
`;

const Interface = ({ handleClick, player, deck, win }) => {
  let isPlayer1Turn = player === 1;
  return (
    <StyledInterface>
      <Button id="1" onClick={handleClick} disabled={deck.length === 0 || win || !isPlayer1Turn}>
        Losuj
      </Button>
      <Button id="2" onClick={handleClick} disabled={deck.length === 0 || win || isPlayer1Turn}>
        Losuj
      </Button>
    </StyledInterface>
  );
};

export default Interface;
