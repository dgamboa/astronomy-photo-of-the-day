import React from 'react'

export default function Apod(props) {
  const { title, date, img, explanation, imgLink } = props;
  
  return (
    <div className="apod">
      <h2>{title}</h2>
      <h3>{date}</h3>
      <a href={imgLink}>
        <img className="apod-image" src={img} alt={title} />
      </a>
      <p>{explanation}</p>
    </div>
  )
}