import React from 'react'
import styled from 'styled-components'

const StyledDescription = styled.div`
  background-color: #333b33;
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
      <p>Interstellar dust clouds and glowing nebulae abound in the fertile constellation of Orion. One of the brightest, M78, is centered in this colorful, wide field view, covering an area north of Orion's belt. At a distance of about 1,500 light-years, the bluish reflection nebula is around 5 light-years across. Its tint is due to dust preferentially reflecting the blue light of hot, young stars. Reflection nebula NGC 2071 is just to the left of M78. Flecks of emission from Herbig-Haro objects, energetic jets from stars in the process of formation, stand out against the dark dust lanes. The exposure also brings out the region's fainter, pervasive reddish glow of atomic hydrogen gas.</p>
    </StyledDescription>
  )
}