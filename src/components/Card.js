import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
  border: 2px solid black;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  border-radius: 5px;
  font-size: 2em;
  font-weight: bold;
  margin: 0.2em auto;
  height: 60%;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = ({ face, deck }) => deck.length > 0 && <StyledCard>{face}</StyledCard>;

export default Card;
