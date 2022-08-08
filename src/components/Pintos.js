import { Link } from "react-router-dom"
const Pintos = () => {
  return (
    <div>
      <Link to='/gallery'>
          <button className='btn neonText prj_btn'>&larr; Back</button>
        </Link>
        <h1 className='prj_header'>PintOS</h1>
        <div className='text_container'>
          <p>&rarr; In this project, I participated as part of a group to build an <span className="neonText">Operating System</span></p>
          
        </div>
        <p className='gist_redirect'><a className='neonText' href='https://gist.github.com/ibrahim-io/02e378bcc3af079d52a2e2d44822ba28' target='_blank' rel='noreferrer'>Go to Gist &rArr;</a></p>
    </div>
  )
}

export default Pintos