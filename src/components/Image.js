import React, { useState } from 'react'
import styled from 'styled-components'
import Description from './Description'

const ImageSection = styled.section`
  /* border: solid 1px black; Delete */
  border-top: 1px solid rgba(255,255,255,0.08);
  margin: 0 auto;
  width: 75%;
  max-width: 80rem;

  .image-header {
    display: flex;
    justify-content: space-between;
    h3 {
      color: #eee;
      cursor: pointer;
      font-weight: 300;
      font-family: Roboto;
      font-size: 2.5rem;
      line-height: 1rem;
      padding: 1.5rem 2rem 0;
    }
  }

  img {
    max-height: 100%;
    max-width: 100%;
    border-radius: 4px;
    box-shadow: 0 0 10px #222;
  }
`;

export default function Image(props) {
  const { title, date, img, explanation, imgLink } = props;
  
  const [collapsedDesc, setCollapsedDesc] = useState(true);

  return (
    <ImageSection className="image-container">
      <div className="image-header">
        <h3 className="title" onClick={() => setCollapsedDesc(!collapsedDesc)}>
          {title}
          {collapsedDesc 
            ? ` ${String.fromCharCode(9662)}`
            : ` ${String.fromCharCode(9652)}`}
        </h3>
        <h3 className="date">{date}</h3>
      </div>
      <Description explanation={explanation} collapsedDesc={collapsedDesc}/>
      <div className="image">
        <a href={imgLink}>
          <img src={img} alt={title}/>
        </a>
      </div>
    </ImageSection>
  )
}