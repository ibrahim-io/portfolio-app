import Home from "./components/Home";
import Wacc from "./components/Wacc";
import Arm from "./components/Arm";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Gallery from "./components/Gallery";
const App = () => {
  
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/wacc" element={<Wacc />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/arm" element={<Arm />} />
      </Routes>
    </Router>
  )
  
}

export default App;
