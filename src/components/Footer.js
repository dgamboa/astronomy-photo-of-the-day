import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const StyledFooter = styled.footer`
  border-top: 1px solid rgba(255,255,255,0.08);
  color: #eee;
  display: flex;
  justify-content: space-around;
  font-family: Roboto;
  font-size: 1.5rem;
  margin: 0 auto;
  padding: 3rem 0;
  width: 75%;
  max-width: 80rem;
  .left-footer {
    flex: 1 1 0;
  }
  .middle-footer {
    flex: 1 1 0;
  }
  .right-footer {
    flex: 1 1 0;
  }
  a {
    color: #eee;
    padding: 4rem;
    text-decoration: none;

    &:hover {
      color: #dd361c;
      text-shadow: 0 0 10px #061f4a;
    }
  }
`;

export default function Footer(props) {
  return (
    <StyledFooter>
      <div className="left-footer">
        <a href="https://apod.nasa.gov/apod/astropix.html">NASA APOD</a>
      </div>
      <div className="middle-footer">
        <a href="https://github.com/dgamboa/nasa-photo-of-the-day/tree/daniel-gamboa">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
      <div className="right-footer">
        <a href="https://apod.nasa.gov/apod/lib/about_apod.html#srapply">Copyright &copy;</a>
      </div>
    </StyledFooter>
  )
}