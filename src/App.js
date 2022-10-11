import './App.css'
import DoctorMessage from './components/DoctorMessage'
import Footer from './components/Footer'
import Header from './components/Header'
import MissionVision from './components/MissionVision'
import OurServices from './components/OurServices'
import OurSession from './components/OurSession'
import Slider from './components/Slider'

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <OurServices />
      <DoctorMessage />
      <MissionVision />
      <OurSession />
      <Footer />
    </div>
  )
}

export default App
