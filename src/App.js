
const App = () => {
  const introduction = [ '> Hello, My Name is Ibrahim',
                '> I’m currently a studying Computer Science at Imperial College London',
                '> I’ve worked with a lot of languages over the years and here is a showcase of ...',
                '> Things I have learnt',
                '> Type ‘next’ in the command line to continue....']

  return (
    <div>
      <p>{introduction[0]}</p>
    </div>
  );
}

export default App;
