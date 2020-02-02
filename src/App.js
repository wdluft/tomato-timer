import React from 'react';
import styled from 'styled-components';

// Components
import SessionsLengths from './components/SessionsLengths';
import Session from './components/Session';

function App() {
  return (
    <StyledContainer>
      <h1>Tomator Timer</h1>
      <SessionsLengths />
      <Session />
    </StyledContainer>
  );
}

export default App;

const StyledContainer = styled.div`
  min-width: 300px;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    color: var(--primary-color);
  }
`;
