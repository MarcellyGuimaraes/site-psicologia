import React from 'react'
import { missions } from '../../assets/api'
import './styles.css'

const MissionVision = () => {
  return (
    <div className="mosion-vision">
      <div className="container">
        <div className="row">
          {missions.map((mission) => (
            <div key={mission.id} className="col-lg-4 col-md-12">
              <div className="single-dd">
                <h4>{mission.title} </h4>
                <p>{mission.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MissionVision
