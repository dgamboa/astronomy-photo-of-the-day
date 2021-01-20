import React from 'react'

export default function Apod(props) {
  const { title, date, img, explanation, imgAlt } = props;
  
  return (
    <div className="apod">
      <h1>{title}</h1>
      <h3>{date}</h3>
      <img src={img} alt={imgAlt} />
      <p>{explanation}</p>
    </div>
  )
}