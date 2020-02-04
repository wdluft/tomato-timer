import React, { useContext } from 'react';
import { SessionContext } from '../contexts/SessionContext';
import { BreakContext } from '../contexts/BreakContext';

const Session = () => {
  const { sessionLength } = useContext(SessionContext);
  const { breakLength } = useContext(BreakContext);

  // const resetLegnth = () => {
  //   setSessionLength(1500);
  // };

  const showTime = () => {
    let minutes = Math.floor(sessionLength / 60);
    let seconds = sessionLength - minutes * 60;
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
      <h1>Session</h1>
      <p>{showTime()}</p>
      <p>PLAY / PAUSE</p>
      {/* <button onClick={resetLegnth} type="button">
        RESET
      </button> */}
    </div>
  );
};

export default Session;
