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
    setBreakLength(breakLength - 30);
  };

  return (
    <BreakContext.Provider
      value={{ breakLength, increaseBreakLength, decreaseBreakLength }}
    >
      {children}
    </BreakContext.Provider>
  );
};

export default BreakContextProvider;

BreakContextProvider.propTypes = {
  children: PropTypes.array.isRequired,
};
