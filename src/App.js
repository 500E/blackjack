import React, { Fragment } from 'react';
import styled from 'styled-components';
import Board from './components/Board';

const Container = styled.div`
  text-align: center;
  width: 90vw;
  margin: 1em auto;
  @media (min-width: 960px) {
    width: 60vw;
    margin-top: 3em;
  }
`;

const App = () => (
  <Fragment>
    <Container>
      <Board />
    </Container>
  </Fragment>
);

export default App;
