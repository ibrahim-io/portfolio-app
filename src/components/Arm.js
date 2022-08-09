import { Link } from "react-router-dom"
const Arm = () => {
return (
    <div>
      <Link to='/gallery'>
        <button className='btn neonText prj_btn'>&larr; Back</button>
      </Link>
      <h1 className='prj_header'>ARM Emulator</h1>
      <div className='text_container'>
        <p>&rarr; In this project, I participated as part of a group to build an <span className="neonText">ARM Emulator</span></p>
        <p>&rarr; The <span className="neonText">emulator</span> was responsible for decoding <span className="neonText">32bit</span> binary instructions and executing them</p>
        <p>&rarr; As an extension, we also built an <span className="neonText">assembler</span> on top of our <span className="neonText">emulator </span>
          which would convert assembly code into 32bit instructions</p>
        <p>&rarr; This project was over the course of about 8 weeks in which I gained a greater proficieny in the <span className="neonText">C </span>
          language and a better understanding of how <span className="neonText">ARM systems</span> translate and process code</p>
      </div>
      <p className='gist_redirect'><a className='neonText' href='https://gist.github.com/ibrahim-io/d92da067d9864f7c93147592edf3925a' target='_blank' rel='noreferrer'>Go to Gist &rArr;</a></p>
    </div>
  )
}

export default Arm