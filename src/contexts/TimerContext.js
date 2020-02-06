import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import useInterval from '../custom-functions/useInterval';

export const TimerContext = createContext();

const TimerContextProvider = props => {
  const { children } = props;

  const [timeLeft, setTimeLeft] = useState(1500);
  const [timerStatus, setTimerStatus] = useState('Work Sesion');
  const [timerRunning, setTimerRunning] = useState(false);

  const toggleTimerRunning = () => {
    if (timerRunning) {
      setTimerRunning(false);
    } else if (timerRunning === false) {
      setTimerRunning(true);
    }
  };

  useInterval(
    () => {
      setTimeLeft(timeLeft - 1);
    },
    timerRunning ? 1000 : null
  );

  return (
    <TimerContext.Provider
      value={{
        timeLeft,
        setTimeLeft,
        timerStatus,
        timerRunning,
        toggleTimerRunning,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};

export default TimerContextProvider;

TimerContextProvider.propTypes = {
  children: PropTypes.object.isRequired,
};
