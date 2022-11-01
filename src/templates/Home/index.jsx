import React from 'react'
import DoctorMessage from '../../components/Home/DoctorMessage'
import MissionVision from '../../components/Home/MissionVision'
import OurServices from '../../components/Home/OurServices'
import Slider from '../../components/Home/Slider'

const Home = () => {
  return (
    <>
      <Slider />
      <OurServices />
      <DoctorMessage />
      <MissionVision />
    </>
  )
}

export default Home
