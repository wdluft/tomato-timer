import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const BreakContext = createContext();

const BreakContextProvider = props => {
  const { children } = props;
  const [breakLength, setBreakLength] = useState(300);

  const increaseBreakLength = () => {
    setBreakLength(breakLength + 30);
  };

  const decreaseBreakLength = () => {
    if (breakLength === 0) {
      return 'Cannot set break length to less than 0';
    }
    setBreakLength(breakLength - 30);
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
