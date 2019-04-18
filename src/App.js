import React, { Fragment } from 'react';
import styled from 'styled-components';
import Board from './components/Board';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Poppins');
    font-family: 'Poppins', sans-serif;
    background: linear-gradient(to right, #000000, #434343);
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

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
    <GlobalStyles />
    <Container>
      <Board />
    </Container>
  </Fragment>
);
export default App;
