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
          <p>&rarr; This particular <span className="neonText">OS</span> was designed to be a
            <span className="neonText"> multithreaded OS</span> running on single core machine</p>
          <p>&rarr; This project lasted over the course of a 10 week term, where we became very comfortable with the
           <span className="neonText"> C</span> programming language</p>
          <p>&rarr; I participated <span className="neonText">500+</span> lines of code to the project, which tried to
           solve problems such as <span className="neonText">Thread Scheduling</span>, Pushing <span className="neonText">pages </span>
           on to the <span className="neonText">stack</span> and also <span className="neonText">Memory Mapped Files</span></p>
          <p>&rarr; From this project, I can confidently say that I gained a deeper insight into the intricacies of <span className="neonText">OSs</span></p>
        </div>
        <p className='gist_redirect'><a className='neonText' href='https://gist.github.com/ibrahim-io/02e378bcc3af079d52a2e2d44822ba28' target='_blank' rel='noreferrer'>Go to Gist &rArr;</a></p>
    </div>
  )
}

export default Pintos