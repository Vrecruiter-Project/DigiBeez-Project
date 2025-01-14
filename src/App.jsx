import Navbar from './Components/Navbar/Navbar';
import Carousel from './Components/Carousel/Carousel';
import AboutDigiBeez from './Components/About/AboutDigiBeez';
import Grow from './Components/Grow/Grow';
import Career from './components/career/career';
import VisionMission from './Components/VisionandMission/VisionMission';
import Footer from './Components/Footer/Footer';
import Form from './Components/Form/Form';
import DigitalMarketing from './Components/DigitalMarketing/DigitalMarketing';
import Terms from './Components/Terms&Condition/Terms';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
    
      <Navbar />
      <Carousel />
      <AboutDigiBeez />
      <Grow />
      <VisionMission />
      <DigitalMarketing />
      <Career />
      <Form />
      <Router>
      <Routes>
          <Route path="/term" element={<Terms />} />
        </Routes>
      
        <Footer />
      </Router>
      
    </>
  );
}

export default App;
