import { Link } from "react-router-dom"
const PrayerTime = () => {
  return (
    <div>
      <Link to='/gallery'>
        <button className='btn neonText prj_btn'>&larr; Back</button>
      </Link>
      <h1 className='prj_header'>Prayer Time App</h1>
      <div className='text_container'>
        <p>&rarr; I created a prayer time app to be used by students attending the <span className="neonText">Islamic Society, </span>
          so they could attend their daily prayers on time</p>
        <p>&rarr; I used a <span className="neonText">REST API</span> to retrieve the prayer times based on the 
          <span className="neonText"> London Central Mosque,</span> which is what the university goes by</p>
        <p>&rarr; I thought this would be a good way to use my skills to help the community at my university</p>
        
      </div>
      <p className='gist_redirect'><a className='neonText' href='https://gentle-dieffenbachia-63fe5c.netlify.app/' target='_blank' rel='noreferrer'>Go to Web App &rArr;</a></p>
    </div>
  )
}

export default PrayerTime