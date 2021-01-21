import React from 'react'
import styled from 'styled-components'

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
      font-family: Roboto;
      font-size: 2.5rem;
      line-height: 1rem;
      padding: 1.5rem 2rem 0;
    }
  }

  img {
    border: solid 1px black; /* Delete */
    max-height: 100%;
    max-width: 100%;
  }
`;

export default function Image(props) {
  const { title, date, img, explanation, imgLink } = props;
  
  return (
    <ImageSection className="image-container">
      <div className="image-header">
        <h3 className="title">Some title to be API</h3>
        <h3 className="date">2021-01-21</h3>
      </div>
      <div className="image">
        <img src="https://apod.nasa.gov/apod/image/2101/M78wideHiggins1024.jpg" alt=""/>
      </div>
      <div className="description">

      </div>
    </ImageSection>
  )
}