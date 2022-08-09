import Home from "./components/Home";
import Wacc from "./components/Wacc";
import Arm from "./components/Arm";
import Pintos from "./components/Pintos";
import PrayerTime from "./components/PrayerTime";
import RoommateFinder from "./components/RoommateFinder";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Gallery from "./components/Gallery";
const App = () => {
  
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/wacc" element={<Wacc />} />
        <Route path="/pintos" element={<Pintos />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/arm" element={<Arm />} />
        <Route path="/prayer-time-app" element={<PrayerTime />} />
        <Route path="/roommate-finder" element={<RoommateFinder />} />
      </Routes>
    </Router>
  )
  
}

export default App;
