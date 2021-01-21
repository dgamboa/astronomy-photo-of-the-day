import React from 'react'

export default function Nav(props) {
  return (
    <div className="nav">
      <a className="site-home-link" href="#">
        Astronomy Picture of the Day
      </a>
      <a href="https://www.nasa.gov/">
        <img className="nasa-logo" src="https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png" alt="NASA logo"/>
      </a>
    </div>
  )
}