import Home from "./components/Home";
import Wacc from "./components/Wacc";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
const App = () => {
  
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/wacc" element={<Wacc />} />
      </Routes>
    </Router>
  )
  
}

export default App;
