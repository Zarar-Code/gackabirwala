import React, {useState, useEffect} from 'react'
import Head from '../../container/Head'
import {  urlFor, client } from '../../client'
import './VacancyPositions.css'

const VacancyPositions = () => {
  const  [VP, setVP] = useState([])

  useEffect(() => {

    const query = '*[_type == "VP"]';
  
    client.fetch(query)
    .then((data)=>{
      setVP(data);

    })
    
  }, [])
  return (
    <>
<Head name={'Vacancy Positions'}/> 
<div className="cont-time" data-aos="fade-up">
    <div class="shadow p-3 mb-5 bg-white rounded media">
      <h1>Vacancy Positions</h1>
      <div className="time">
        <ul>
          <li className='clock'> Last Updated</li>
          <li >  August 17, 2023</li>
          </ul>
      </div>
      {VP?.map((curElem) => (
  <div key={curElem._id}>
    <div>
      <div className="mid_pic">
          <img src={urlFor(curElem.VPimage)} alt="VPImage" />
      </div>
    </div>
  </div>
))
}
        <hr />  
    </div>
    </div>
    
    </>
  )
}

export default VacancyPositions