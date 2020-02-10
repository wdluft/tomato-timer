import React from 'react';
import styled from 'styled-components';

// Contexts
import SessionContextProvider from './contexts/SessionContext';
import BreakContextProvider from './contexts/BreakContext';
import TimerContextProvider from './contexts/TimerContext';

// Components
import SessionsLengths from './components/SessionsLengths';
import Timer from './components/timer/Timer';
import Footer from './components/footer/Footer';

function App() {
  return (
    <StyledContainer>
      <h1>Tomator Timer</h1>
      <TimerContextProvider>
        <SessionContextProvider>
          <BreakContextProvider>
            <SessionsLengths />
            <Timer />
            <Footer />
          </BreakContextProvider>
        </SessionContextProvider>
      </TimerContextProvider>
    </StyledContainer>
  );
}

export default App;

const StyledContainer = styled.div`
  min-width: 300px;
  max-width: 600px;
  margin: auto;
  text-align: center;
  box-shadow: 0 0 2px 5px var(--primary-color-4);
  border-radius: 10px;
  padding: 2rem;

  & > h1 {
    color: var(--primary-color);
    font-size: 4rem;
    text-align: center;
    margin-bottom: 2rem;
    font-weight: bold;
  }
`;
