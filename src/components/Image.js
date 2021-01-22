import React, { useState } from 'react'
import styled from 'styled-components'
import Description from './Description'

const ImageSection = styled.section`
  /* border: solid 1px black; Delete */
  border-top: 1px solid rgba(255,255,255,0.08);
  border-bottom: 1px solid rgba(0,0,0,0.5);
  margin: 0 auto;
  padding-bottom: 5rem;
  width: 80%;
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

  .image {
    position: relative;
  }

  .prev {
    position: absolute;
    padding: 5rem;
    border: none;
    cursor: pointer;
    height: 99.5%;
    opacity: 0;
    &:hover {
      opacity: 0.2;
    }
  }

  .next {
    position: absolute;
    right: 0;
    padding: 5rem;
    border: none;
    cursor: pointer;
    height: 99.5%;
    opacity: 0;
    &:hover {
      opacity: 0.2;
    }
  }

  img {
    border-radius: 4px;
    box-shadow: 0 0 10px #222;
    max-width: 100%;
    max-height: 100%;
  }
`;

export default function Image(props) {
  const { title, date, img, explanation, imgLink, prevDate, nextDate } = props;
  
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
        <button className="prev" onClick={prevDate}>&#9668; Prev</button>
        <a href={imgLink}>
          <img src={img} alt={title}/>
        </a>
        <button className="next" onClick={nextDate}>Next &#9658;</button>
      </div>
    </ImageSection>
  )
}