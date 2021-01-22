import React from 'react'
import styled from 'styled-components'

const StyledDescription = styled.div`
  background-color: #2e302e;
  border-radius: 4px;
  box-shadow: inset 0 0 10px #111;
  box-sizing: border-box;
  display: ${props => props.collapsedDesc ? 'none' : ''};
  margin: 0 auto 3rem;
  padding: 0.5rem 3rem;
  width: 94%;
  p {
    color: #ddd;
    text-align: justify;
    font-size: 1.8rem;
    font-weight: 700;
    
  }
`;

export default function Description(props) {
  const { explanation, collapsedDesc } = props;
  
  return (
    <StyledDescription className="description" collapsedDesc={collapsedDesc}>
      <p>{explanation}</p>
    </StyledDescription>
  )
}