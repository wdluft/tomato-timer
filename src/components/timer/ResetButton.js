import React, { useContext } from 'react';
import { SessionContext } from '../../contexts/SessionContext';
import { BreakContext } from '../../contexts/BreakContext';
import { TimerContext } from '../../contexts/TimerContext';

const ResetButton = () => {
  const { setSessionLength } = useContext(SessionContext);
  const { setBreakLength } = useContext(BreakContext);
  const { setTimeLeft } = useContext(TimerContext);

  const reset = () => {
    setSessionLength(1500);
    setBreakLength(300);
    setTimeLeft(1500);
  };

  return (
    <button type="button" onClick={reset}>
      Reset
    </button>
  );
};

export default ResetButton;
