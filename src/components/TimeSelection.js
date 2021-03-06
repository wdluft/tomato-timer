import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { SessionContext } from '../contexts/SessionContext';
import { BreakContext } from '../contexts/BreakContext';
import { TimerContext } from '../contexts/TimerContext';
import { showTime } from '../custom-functions/showTime';
import { Button } from '../styled-elements/Button';

const TimeSelection = ({ timeType }) => {
  const {
    sessionLength,
    increaseSessionLength,
    decreaseSessionLength,
  } = useContext(SessionContext);
  const { breakLength, increaseBreakLength, decreaseBreakLength } = useContext(
    BreakContext
  );
  const { timerRunning } = useContext(TimerContext);

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

  if (timerRunning) {
    return (
      <StyledDiv>
        <p>{timeType} Length</p>
        <p className="displayed-time">{shownTime}</p>
        <div>
          <Button
            type="button"
            className="increase"
            onClick={increaseTime}
            disabled
            title={`${timeType} Length Increase - Disabled`}
          >
            <FontAwesomeIcon icon={faArrowUp} size="lg" />
          </Button>
          <Button
            type="button"
            onClick={decreaseTime}
            className="decrease"
            disabled
            title={`${timeType} Length Decrease - Disabled`}
          >
            <FontAwesomeIcon icon={faArrowDown} size="lg" />
          </Button>
        </div>
      </StyledDiv>
    );
  }
  if (timerRunning === false) {
    return (
      <StyledDiv>
        <p>{timeType} Length</p>
        <p className="displayed-time">{shownTime}</p>
        <div>
          <Button
            type="button"
            className="increase"
            onClick={increaseTime}
            title={`${timeType} Length Increase`}
          >
            <FontAwesomeIcon icon={faArrowUp} size="lg" />
          </Button>
          <Button
            type="button"
            onClick={decreaseTime}
            className="decrease"
            title={`${timeType} Length Decrease`}
          >
            <FontAwesomeIcon icon={faArrowDown} size="lg" />
          </Button>
        </div>
      </StyledDiv>
    );
  }
};

export default TimeSelection;

TimeSelection.propTypes = {
  timeType: PropTypes.string.isRequired,
};

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    font-size: 1.5rem;

    &.displayed-time {
      font-size: 2rem;
    }
  }

  .increase:hover {
    color: var(--tertiary-color-1);
    border: 2px solid var(--tertiary-color-1);
  }

  .increase:disabled:hover {
    color: var(--dark-color);
    border: 2px solid #bbb;
  }

  .increase:focus {
    outline: solid var(--tertiary-color-1);
  }

  .decrease:hover {
    color: var(--secondary-color-1);
    border: 2px solid var(--secondary-color-1);
  }

  .decrease:disabled:hover {
    color: var(--dark-color);
    border: 2px solid #bbb;
  }

  .decrease:focus {
    outline: solid var(--secondary-color-1);
  }
`;
