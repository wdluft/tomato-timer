import React, { useContext } from 'react';
import { TimerContext } from '../../contexts/TimerContext';
import { showTime } from '../../custom-functions/showTime';
import ResetButton from './ResetButton';

const Timer = () => {
  const { timeLeft, timerStatus, toggleTimerRunning } = useContext(
    TimerContext
  );

  return (
    <div>
      <h1>{timerStatus}</h1>
      <p>{showTime(timeLeft)}</p>
      <button type="button" onClick={toggleTimerRunning}>
        PLAY / PAUSE
      </button>
      <ResetButton />
    </div>
  );
};

export default Timer;
