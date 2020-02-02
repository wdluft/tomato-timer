import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TimeSelection = ({ timeType }) => (
  <StyledDiv>
    <p>{timeType} Length</p>
    <p>5</p>
    <p>
      <span className="increase">UP</span>
      <span className="decrease">DOWN</span>
    </p>
  </StyledDiv>
);

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
