import React, { useContext } from 'react';
import { SessionContext } from '../../contexts/SessionContext';
import { BreakContext } from '../../contexts/BreakContext';
import { TimerContext } from '../../contexts/TimerContext';
import { Button } from '../../styled-elements/Button';

const ResetButton = () => {
  const { setSessionLength } = useContext(SessionContext);
  const { setBreakLength } = useContext(BreakContext);
  const { setTimeLeft, setTimerRunning } = useContext(TimerContext);

  const reset = () => {
    setSessionLength(1500);
    setBreakLength(300);
    setTimeLeft(1500);
    setTimerRunning(false);
  };

  return (
    <Button type="button" onClick={reset}>
      Reset
    </Button>
  );
};

export default ResetButton;
