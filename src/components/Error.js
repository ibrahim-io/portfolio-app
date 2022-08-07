
const Error = ({error}) => {
  if (error) {
    return (
      <p style={{'color': 'red'}}>Please enter 'next' to see the next project</p>
    )
  }
}

export default Error