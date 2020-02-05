import React, { useContext, useState } from 'react';
import { SessionContext } from '../contexts/SessionContext';
import { BreakContext } from '../contexts/BreakContext';
import useInterval from '../custom-functions/useInterval';

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

  const showTime = () => {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft - minutes * 60;
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    return `${minutes}:${seconds}`;
  };

  return (
    <div>
      <h1>{timerStatus}</h1>
      <p>{showTime()}</p>
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
