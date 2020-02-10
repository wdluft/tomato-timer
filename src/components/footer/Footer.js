import React from 'react';
import styled from 'styled-components';

const Footer = () => (
  <StyledFooter>
    <h1>
      Made by{' '}
      <a href="https://willluft" target="_blank" rel="noopener noreferrer">
        Will Luft
      </a>
    </h1>
    <p>
      <a
        href="https://twitter.com/iamwilldl"
        target="_blank"
        rel="noopener noreferrer"
      >
        Twitter
      </a>
    </p>
  </StyledFooter>
);

export default Footer;

const StyledFooter = styled.footer`
  background-color: var(--dark-color);
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  margin: 0 auto;
  height: 85px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;
  h1 {
    font-size: 1.25rem;
    border-bottom: 1px solid var(--light-color);
  }
  p {
    font-size: 1rem;
  }
  a {
    text-decoration: none;
    color: var(--primary-color);

    &:hover {
      color: var(--primary-color-3);
    }
  }
  @media (min-width: 500px) {
    h1 {
      font-size: 1.75rem;
    }
    p {
      font-size: 1.25rem;
    }
  }
`;
