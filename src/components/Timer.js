import React, { useContext, useState } from 'react';
import { SessionContext } from '../contexts/SessionContext';
import { BreakContext } from '../contexts/BreakContext';
import useInterval from '../custom-functions/useInterval';
import { showTime } from '../custom-functions/showTime';

const Timer = () => {
  const { sessionLength, setSessionLength } = useContext(SessionContext);
  const { breakLength, setBreakLength } = useContext(BreakContext);

  const [timerStatus, setTimerStatus] = useState('Work Sesion');
  const [timerRunning, setTimerRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(sessionLength);
  const [intervalId, setIntervalId] = useState(0);

  useInterval(
    () => {
      setTimeLeft(timeLeft - 1);
    },
    timerRunning ? 1000 : null
  );

  const reset = () => {
    setSessionLength(1500);
    setBreakLength(300);
    setTimeLeft(sessionLength);
  };

  const toggleTimerRunning = () => {
    if (timerRunning) {
      setTimerRunning(false);
      setIntervalId(clearInterval(intervalId));
    } else if (timerRunning === false) {
      setTimerRunning(true);
    }
  };

  return (
    <div>
      <h1>{timerStatus}</h1>
      <p>{showTime(timeLeft)}</p>
      <button type="button" onClick={toggleTimerRunning}>
        PLAY / PAUSE
      </button>
      <button onClick={reset} type="button">
        RESET
      </button>
    </div>
  );
};

export default Timer;
