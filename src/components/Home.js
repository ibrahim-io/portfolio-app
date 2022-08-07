import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TypeWriter from "./TypeWriter";
import Error from "./Error";
const Home = () => {
  const [error, setError] = useState(false)
  const introduction = [ '> Hello, My Name is Ibrahim',
                '> I’m currently studying Computer Science at Imperial College London',
                '> I’ve worked with a lot of languages over the years and here is a showcase of ...',
                '> Things I have learnt',
                '> Type ‘next’ in the command line to continue....']

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const input = document.getElementById('next_input').value
    if (input !== 'next') {
      setError(true)
      setTimeout(() => {
        setError(false)
      }, 3000)
    } else {
      navigate('/wacc')
    }
  }

  return (
    <div>
      <div className="terminal1">
        <TypeWriter text={introduction[0]} delay={100} />
        <TypeWriter text={introduction[1]} delay={2000}/>
        <TypeWriter text={introduction[2]} delay={6500}/>
        <TypeWriter text={introduction[3]} delay={12000}/>
        <TypeWriter text={introduction[4]} delay={15000}/>
        <Error error={error}/>
      </div>
      <div className="terminal2">
        <form onSubmit={handleSubmit}>
          <label><span className="green">ibrahim's-portfolio@cool-laptop</span><span className="purple">:</span><span className="blue">~</span><span className="purple">$</span></label>
          <input id="next_input"/>
        </form>
      </div>
    </div>
  );
}

export default Home