import React from 'react';
import styled from 'styled-components';
import TimeSelection from './TimeSelection';

const SessionsLengths = () => (
  <StyledSessionsLengths>
    <TimeSelection timeType="Session" />
    <TimeSelection timeType="Break" />
  </StyledSessionsLengths>
);

export default SessionsLengths;

const StyledSessionsLengths = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;
