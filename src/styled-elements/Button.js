import styled from 'styled-components';

export const Button = styled.button`
  color: var(--background-color);
  background-color: var(--light-color);
  padding: 1rem;
  font-size: 1rem;
  margin: 10px;
  transition: all 0.1s ease-in;
  font-weight: bold;
  border: 2px solid #bbb;

  &:hover {
    background-color: #bbb;
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
  &:disabled:hover {
    background-color: var(--light-color);
  }
`;
