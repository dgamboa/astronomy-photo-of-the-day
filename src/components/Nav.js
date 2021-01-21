import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
  border: solid 1px black; /* Delete */
  border-bottom: solid 1px #555;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 15rem;
  margin: 0 auto;
  width: 75%;
  max-width: 80rem;

  .logo {
    height: auto;
    width: 20rem;
  }

  .logo > img {
    border: solid 1px black; /* Delete */
    max-height: 100%;
    max-width: 100%;
    padding: 0 2rem;
  }

  .page-title {
    border: solid 1px black; /* Delete */
  }

  h1 {
    font-size: 4rem;
    line-height: 1rem;
  }

  h2 {
    font-size: 2.5rem;
    line-height: 1rem;
    padding: 0 3rem;
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