import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const TimerContext = createContext();

const TimerContextProvider = props => {
  const { children } = props;

  const [timeLeft, setTimeLeft] = useState(1500);
  const [timerStatus, setTimerStatus] = useState('Work Session');
  const [timerRunning, setTimerRunning] = useState(false);

  const toggleTimerRunning = () => {
    if (timerRunning) {
      setTimerRunning(false);
    } else if (timerRunning === false) {
      setTimerRunning(true);
    }
  };

  return (
    <TimerContext.Provider
      value={{
        timeLeft,
        setTimeLeft,
        timerStatus,
        timerRunning,
        toggleTimerRunning,
        setTimerRunning,
        setTimerStatus,
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
