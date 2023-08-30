import React from 'react'
import "./degrees.css"
import Head from '../../container/Head'
import  DegreeProContent from '../../Contents/DegreeProContent'

const Degrees = () => {
  return (
    <>
<Head name={'Degrees'}/> 
<div className="cont-time" data-aos="fade-up">
    <div class="shadow p-3 mb-5 bg-white rounded media">
      <h1>Degrees</h1>
      <div className="time">
        <ul>
        <li className='clock'> Last Updated</li>
          <li > August 17, 2023</li>
          </ul>
       </div>
      <p>Degree Details Available on Degree Program Page</p>
      <hr />
        <DegreeProContent/>
    </div>
    </div>
    </>
  )
}

export default Degrees