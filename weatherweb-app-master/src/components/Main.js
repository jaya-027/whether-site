import React from 'react'

import videoBg from './videoBg.mp4'

import "./Main.css"
const Main = () => {
  return (
    <div className='main'>
      <div className="overlay ">
        <video src={videoBg} autoPlay loop muted />
        
      </div>

      <h1 className="content">Welcome to my Site</h1>
      <div className="content">



      </div>
    </div>
  )
}

export default Main