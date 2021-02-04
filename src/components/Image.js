import React, { useState } from 'react'
import styled from 'styled-components'
import Description from './Description'

const ImageSection = styled.section`
  border-top: 1px solid rgba(255,255,255,0.08);
  border-bottom: 1px solid rgba(0,0,0,0.5);
  margin: 0 auto;
  padding-bottom: 5rem;
  width: 80%;
  max-width: 80rem;

  .image-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h3, h4 {
      color: #eee;
      font-weight: 300;
      font-family: Roboto;
      font-size: 2rem;
      line-height: 1rem;
      padding: 1.5rem 2rem 0;
    }
    h3 {
      cursor: pointer;
    }
  }

  .image {
    position: relative;
  }

  .prev {
    background-color: rgba(0, 0, 0, 0);
    border: none;
    color: white;
    cursor: pointer;
    font-size: 6rem;
    height: 99.5%;
    opacity: 0.3;
    padding: 5rem 2rem;
    position: absolute;
    &:hover {
      opacity: 0.5;
    }
  }

  .next {
    background-color: rgba(0, 0, 0, 0);
    border: none;
    color: white;
    cursor: pointer;
    font-size: 6rem;
    height: 99.5%;
    opacity: 0.3;
    padding: 5rem 2rem;
    position: absolute;
    right: 0;
    &:hover {
      opacity: 0.5;
    }
  }

  img, iframe {
    border: none;
    border-radius: 4px;
    box-shadow: 0 0 10px #222;
    max-width: 100%;
    max-height: 100%;
  }

  iframe {
    height: 530px;
    width: 100%;
  }

  @media (max-width: 950px) {
    .image-header {
      h3, h4 {
        font-size: 1.5rem;
      }
    }
    iframe {
      height: 400px;
    }
  }

  @media (max-width: 700px) {
    .image-header {
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
      h3, h4 {
        padding: 1rem 0;
        margin: 0;
      }
      h3 {
        margin-bottom: 1rem;
      }
    }
    iframe {
      height: 315px;
    }
  }

  @media (max-width: 620px) {
    .image-header {
      h3 { 
        line-height: 2rem;
      }
      h4 {
        margin-top: 2rem;
      }
    }
    .prev, .next {
      font-size: 3rem;
      padding: 2rem 0.5rem;
    }
  }

  @media (max-width: 450px) {
    iframe {
      height: 100%;
    }
  }
`;

export default function Image(props) {
  const { title,
          date,
          initialDate,
          img,
          explanation,
          imgLink,
          mediaType,
          prevDate,
          nextDate } = props;
  
  const [collapsedDesc, setCollapsedDesc] = useState(true);

  return (
    <ImageSection className="image-container">
      <div className="image-header">
        <h3 className="title"
            onClick={() => setCollapsedDesc(!collapsedDesc)}
        >
          {title}
          {collapsedDesc 
            ? ` ${String.fromCharCode(9662)}`
            : ` ${String.fromCharCode(9652)}`}
        </h3>
        <h4 className="date">{date}</h4>
      </div>
      
      <Description explanation={explanation} collapsedDesc={collapsedDesc}/>
      
      <div className="image">
        <button className="prev" onClick={prevDate}>&#9668;</button>
        {
          mediaType === 'image' &&
          <a href={imgLink}>
            <img src={img} alt={title}/>
          </a>
        }
        {
          mediaType === 'video' &&
          <a href={img}>
            <iframe src={img} title={title}/>
          </a>
        }
        {
          date !== initialDate &&
          <button className="next" onClick={nextDate}>&#9658;</button>
        }
      </div>
    </ImageSection>
  )
}