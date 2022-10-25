import React from 'react'
import DoctorMessage from '../../components/Home/DoctorMessage'
import MissionVision from '../../components/Home/MissionVision'
import OurServices from '../../components/Home/OurServices'
import OurSession from '../../components/Home/OurSession'
import Slider from '../../components/Home/Slider'

const Home = () => {
  return (
    <>
      <Slider />
      <OurServices />
      <DoctorMessage />
      <MissionVision />
      <OurSession />
    </>
  )
}

export default Home
