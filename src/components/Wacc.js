import { Link } from 'react-router-dom'
const Wacc = () => {
  return (
    <div>
      <Link to='/gallery'>
        <button className='btn neonText wacc_btn'>&larr; Back</button>
      </Link>
      <h1 className='wacc_header'>WACC</h1>
      <div className='text_container'>
        <p>&rarr; In this project, I participated as part of a group to build a compiler</p>
        <p>&rarr; The WACC language was a language developed by Deparment of Computing at 
          Imperial College London</p>
        <p>&rarr; We had to perform <span className='neonText'>Syntax Analysis</span> on any WACC file which would be done 
        by the parser</p> 
        <p>&rarr; The <span className='neonText'>Parser</span> would then output an <span className='neonText'>Abstract Syntax Tree</span></p>
        <p>&rarr; We would the have to perform <span className='neonText'>Semantic Analysis   </span> 
          on the <span className='neonText'>AST</span> to ensure the code is semantically correct</p>
      </div>
      <p className='gist_redirect'><a className='neonText' href='https://gist.github.com/ibrahim-io/746bb0b794ad8d264268f749ffc87700' target='_blank' rel='noreferrer'>Go to Gist &rArr;</a></p>
    </div>
  )
}

export default Wacc