import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

import { TimerContext } from './TimerContext';

export const BreakContext = createContext();

const BreakContextProvider = props => {
  const { children } = props;
  const [breakLength, setBreakLength] = useState(300);
  const { timeLeft, setTimeLeft, timerStatus } = useContext(TimerContext);

  const increaseBreakLength = () => {
    setBreakLength(breakLength + 30);
    if (timerStatus === 'Break Session') {
      setTimeLeft(timeLeft + 30);
    }
  };

  const decreaseBreakLength = () => {
    if (breakLength === 30) {
      return 'Cannot set break length to less than 0';
    }
    setBreakLength(breakLength - 30);
    if (timerStatus === 'Break Session') {
      setTimeLeft(timeLeft + 30);
    }
  };

  return (
    <BreakContext.Provider
      value={{
        breakLength,
        increaseBreakLength,
        decreaseBreakLength,
        setBreakLength,
      }}
    >
      {children}
    </BreakContext.Provider>
  );
};

export default BreakContextProvider;

BreakContextProvider.propTypes = {
  children: PropTypes.array.isRequired,
};
