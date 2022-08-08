import scala from '../scala-icon.png'
import c from '../c_transparent.png'
import react from '../react.png'
import WindowTemplate from './WindowTemplate'
import React from 'react'


const Gallery = () => {
  const projects = [
    {
      header: 'WACC',
      image: scala,
      link: '/wacc'
    },
    {
      header: 'Pintos',
      image: c,
      link: '/pintos'
    },
    {
      header: 'ARM Emulator',
      image: c,
      link: '/arm'
    },
    {
      header: 'Prayer Time App',
      image: react,
      link: '/prayer-time-app'
    },
    {
      header: 'Roomate Finder App',
      image: react,
      link: '/roommate-finder'
    }
  ]

  return (
    <div>
      <h1 style={{'textAlign': 'center'}}>Gallery</h1>
      <div className='projects_container'>
        {projects.map(p => {
          return <WindowTemplate image={p.image} header={p.header} link={p.link} key={p.header}/>
        })}
      </div>
    </div>
  )
}

export default Gallery