import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import Hand from './Hand';
import Score from './Score';
import Interface, { Button } from './Interface';
import { generateDeck, getRandomItem, getCardValue, cards } from '../utils';
import { greenBorder } from '../styles';

const StyledBoard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: center;
`;

const Heading = styled.h1`
  background-color: mediumseagreen;
  font-size: 1rem;
  ${greenBorder};
  padding: 0.8em;
  margin: 0;
`;

const Reset = styled(Button)`
font-size: 1rem;
`;

class Board extends Component {
  state = {
    player: getRandomItem([ 1, 2 ]),
    deck: generateDeck(cards),
    card1: [],
    card2: [],
    score1: null,
    score2: null
  };

  handleClick = (e) => {
    const deck = [ ...this.state.deck ];
    const card = deck.pop();
    const cardValue = getCardValue(card);
    if (e.target.id === '1') {
      this.setState({
        deck: deck,
        player: this.state.player === 1 ? 2 : 1,
        card1: [ ...this.state.card1, card ],
        score1: this.state.score1 + cardValue
      });
    }
    if (e.target.id === '2') {
      this.setState({
        deck: deck,
        player: this.state.player === 1 ? 2 : 1,
        card2: [ ...this.state.card2, card ],
        score2: this.state.score2 + cardValue
      });
    }
  };

  resetGame = () =>
    this.setState({
      player: getRandomItem([ 1, 2 ]),
      deck: generateDeck(cards),
      card1: [],
      card2: [],
      score1: null,
      score2: null
    });

  render() {
    const { player, deck, card1, card2, score1, score2 } = this.state;
    let win = score1 > 21 || score2 > 21;
    return (
      <Fragment>
        {!win ? (
          <Heading>Oczekiwanie na ruch: zawodnik {player}</Heading>
        ) : (
          <Heading>Wygrana: zawodnik {player === 1 ? 2 : 1}</Heading>
        )}
        <StyledBoard>
          <Score score={score1} history={card1} />
          <Score score={score2} history={card2} />
          <Hand player={'Zawodnik 1'} face={card1[card1.length - 1]} deck={deck} />
          <Hand player={'Zawodnik 2'} face={card2[card2.length - 1]} deck={deck} />
        </StyledBoard>
        <Interface handleClick={this.handleClick} player={player} deck={deck} win={win} />
        {win && <Reset onClick={this.resetGame}>RESET</Reset>}
      </Fragment>
    );
  }
}

export default Board;
