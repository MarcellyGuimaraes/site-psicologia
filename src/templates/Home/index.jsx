import React from 'react'
import DoctorMessage from '../../components/DoctorMessage'
import MissionVision from '../../components/MissionVision'
import OurServices from '../../components/OurServices'
import OurSession from '../../components/OurSession'
import Slider from '../../components/Slider'

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
