import scala from '../scala-icon.png'
import c from '../c_transparent.png'
import react from '../react.png'
import linkedin from '../icons8-linkedin-80.png'
import gmail from '../icons8-gmail-login-80.png'
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
      header: 'Roommate Finder App',
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
      <div className='gallery_footer'>
        <h3>Socials:</h3>
        <div className='gmail-container'>
          <img src={gmail} alt='gmail' />
          <a href='mailto:ii83326@gmail.com? 
          subject=Response To Porfolio'><span className='neonText'>send an email</span></a>
        </div>
        <div className='linkedin-container'>
          <img src={linkedin} alt='linked in' />
          <a href='https://www.linkedin.com/in/ibrahim-i/' target='_blank' rel='noreferrer'><span className='neonText'>visit my linkedin</span></a>
        </div>
      </div>
    </div>
  )
}

export default Gallery