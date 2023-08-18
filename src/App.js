import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Projects from './components/Projects';
import Contact from './components/Contact';
import About from './components/About';

function App() {
  return (
    <>

      <Router>
        <Navbar />
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route  path="/about" element={<About/>} />
            {/* <Route  path="/projects" element={<Projects/>} /> */}
            <Route  path="/contact" element={<Contact/>} />
              
           
          </Routes>
        <Footer />
      </Router>

    </>
  );
}

export default App;
