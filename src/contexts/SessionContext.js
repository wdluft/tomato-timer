import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const SessionContext = createContext();

const SessionContextProvider = props => {
  const { children } = props;
  const [sessionLength, setSessionLength] = useState(1500);

  const increaseSessionLength = () => {
    setSessionLength(sessionLength + 30);
  };

  const decreaseSessionLength = () => {
    if (sessionLength === 0) {
      return 'Cannot set session length to less than 0';
    }
    setSessionLength(sessionLength - 30);
  };

  return (
    <SessionContext.Provider
      value={{
        sessionLength,
        increaseSessionLength,
        decreaseSessionLength,
        setSessionLength,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};

export default SessionContextProvider;

SessionContextProvider.propTypes = {
  children: PropTypes.object.isRequired,
};
