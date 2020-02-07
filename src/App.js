import React from 'react';
import styled from 'styled-components';

// Contexts
import SessionContextProvider from './contexts/SessionContext';
import BreakContextProvider from './contexts/BreakContext';
import TimerContextProvider from './contexts/TimerContext';

// Components
import SessionsLengths from './components/SessionsLengths';
import Timer from './components/timer/Timer';

function App() {
  return (
    <StyledContainer>
      <h1>Tomator Timer</h1>
      <TimerContextProvider>
        <SessionContextProvider>
          <BreakContextProvider>
            <SessionsLengths />
            <Timer />
          </BreakContextProvider>
        </SessionContextProvider>
      </TimerContextProvider>
    </StyledContainer>
  );
}

export default App;

const StyledContainer = styled.div`
  min-width: 300px;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  & > h1 {
    color: var(--primary-color);
    font-size: 4rem;
    text-align: center;
    margin-bottom: 2rem;
  }
`;
