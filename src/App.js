import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

import Footer from './components/Footer'
import Header from './components/Header'

import AboutUs from './templates/AboutUs'
import FaleConosco from './templates/FaleConosco'
import Home from './templates/Home'
import Services from './templates/Services'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about_us" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/fale_conosco" element={<FaleConosco />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
