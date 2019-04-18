export const cards = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K' ];

export const getRandomItem = (items) => items[Math.floor(Math.random() * items.length)];

export const generateDeck = (cards) => {
  let deck = [];
  for (let i = 0; i < 100; i++) {
    deck.push(getRandomItem(cards));
  }
  return deck;
};

export const getCardValue = (card) => {
  let score = 0;
  switch (card) {
    case 'A':
      score += 1;
      break;
    case 'B':
      score += 2;
      break;
    case 'C':
      score += 3;
      break;
    case 'D':
      score += 4;
      break;
    case 'E':
      score += 5;
      break;
    case 'F':
      score += 6;
      break;
    case 'G':
      score += 7;
      break;
    case 'H':
      score += 8;
      break;
    case 'I':
      score += 9;
      break;
    case 'J':
      score += 10;
      break;
    case 'K':
      score += 11;
      break;
    default:
      return score;
  }
  return score;
};
