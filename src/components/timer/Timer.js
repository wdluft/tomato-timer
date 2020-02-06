/* eslint-disable jsx-a11y/media-has-caption */
import React, { useContext } from 'react';
import { TimerContext } from '../../contexts/TimerContext';
import { SessionContext } from '../../contexts/SessionContext';
import { BreakContext } from '../../contexts/BreakContext';
import { showTime } from '../../custom-functions/showTime';
import ResetButton from './ResetButton';
import useInterval from '../../custom-functions/useInterval';

const Timer = () => {
  const {
    timeLeft,
    timerStatus,
    toggleTimerRunning,
    setTimeLeft,
    timerRunning,
    setTimerStatus,
  } = useContext(TimerContext);

  const { sessionLength } = useContext(SessionContext);
  const { breakLength } = useContext(BreakContext);

  const switchSession = () => {
    if (timerStatus === 'Work Session') {
      setTimerStatus('Break Session');
      setTimeLeft(breakLength);
    } else {
      setTimerStatus('Work Session');
      setTimeLeft(sessionLength);
    }
  };

  const decrementTime = () => {
    const timeRemaining = timeLeft - 1;
    if (timeRemaining >= 0) {
      setTimeLeft(timeRemaining);
    } else {
      switchSession();
    }
  };

  useInterval(
    () => {
      // setTimeLeft(timeLeft - 1);
      decrementTime();
    },
    timerRunning ? 100 : null
  );

  return (
    <div>
      <h1>{timerStatus}</h1>
      <p>{showTime(timeLeft)}</p>
      <button type="button" onClick={toggleTimerRunning}>
        PLAY / PAUSE
      </button>
      <ResetButton />
      <audio id="beep" preload="auto" src="https://goo.gl/65cBl1" />
    </div>
  );
};

export default Timer;