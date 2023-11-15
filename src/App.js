import './App.css';
import About from './components/about/About';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Skills from './components/skills/Skills';
import Qualification from './components/qualification/Qualification';
import Contact from './components/contact/Contact';
// import Footer from './components/footer/Footer';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>        
    
    <BrowserRouter>

      <Header/>
      <main className='main'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/qualification" element={<Qualification />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
      </main>
      {/* <Footer/> */}
    </BrowserRouter>

    </>
  );
}

export default App;
