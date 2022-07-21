import Typewriter from 'typewriter-effect'

const TypeWriter = ({text, delay}) => {
  return (
      <Typewriter
        onInit={(typewriter) => {
          typewriter.pauseFor(delay)
            .typeString(text)
            .start();
        }}
        options={{
          cursor: '',
          delay: 55 
        }}
      />
  )
}

export default TypeWriter