import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { SessionContext } from '../contexts/SessionContext';
import { BreakContext } from '../contexts/BreakContext';

const TimeSelection = ({ timeType }) => {
  const {
    sessionLength,
    increaseSessionLength,
    decreaseSessionLength,
  } = useContext(SessionContext);
  const { breakLength, increaseBreakLength, decreaseBreakLength } = useContext(
    BreakContext
  );

  const showTime = time => {
    let minutes = Math.floor(time / 60);
    let seconds = time - minutes * 60;
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    return `${minutes}:${seconds}`;
  };

  let shownTime;
  let increaseTime;
  let decreaseTime;

  if (timeType === 'Session') {
    increaseTime = increaseSessionLength;
    decreaseTime = decreaseSessionLength;
    shownTime = showTime(sessionLength);
  } else if (timeType === 'Break') {
    increaseTime = increaseBreakLength;
    decreaseTime = decreaseBreakLength;
    shownTime = showTime(breakLength);
  }

  return (
    <StyledDiv>
      <p>{timeType} Length</p>
      <p>{shownTime}</p>
      <p>
        <button type="button" className="increase" onClick={increaseTime}>
          UP
        </button>
        <button type="button" onClick={decreaseTime} className="decrease">
          DOWN
        </button>
      </p>
    </StyledDiv>
  );
};

export default TimeSelection;

TimeSelection.propTypes = {
  timeType: PropTypes.string.isRequired,
};

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;

  .increase:hover {
    color: var(--blue-color);
    cursor: pointer;
  }

  .decrease:hover {
    color: var(--red-color);
    cursor: pointer;
  }
`;
