import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
  border-bottom: 1px solid rgba(0,0,0,0.5);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 15rem;
  margin: 0 auto;
  width: 80%;
  max-width: 80rem;

  .logo {
    height: auto;
    width: 20rem;
  }

  .logo > img {
    max-height: 100%;
    max-width: 100%;
    padding: 0 2rem;
  }

  h1 {
    font-size: 4.2rem;
    line-height: 1rem;
    color: #eee;
  }

  h2 {
    font-size: 2.5rem;
    font-style: italic;
    line-height: 1rem;
    padding: 0 3rem;
    color: #ccc;
  }

  @media (max-width: 620px) {
    flex-direction: column;
    height: auto;
    .logo > img {
      padding: 0;
      margin: 3rem 0 2rem;
    }
    h2 {
      margin-bottom: 3.5rem;
      font-size: 2.2rem;
    }
  }
`;

export default function Nav(props) {
  return (
    <StyledHeader>
      <div className="logo">
        <img src="/assets/nasa_worm_logo.png" alt="NASA Worm Logo"></img>
      </div>
      <div className="page-title">
        <h1>Astronomy</h1>
        <h2>Picture of the Day</h2>
      </div>
    </StyledHeader>
  )
}