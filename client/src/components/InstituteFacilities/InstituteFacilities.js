import React, {useState, useEffect} from 'react'
import Head from '../../container/Head'
import { client } from '../../client'
import './InstituteFacilities.css'

const InstituteFacilities = () => {

  const  [institutefacilities, setInstitutefacilities] = useState([])

  useEffect(() => {

    const query = '*[_type == "institutefacilities"]';
  
    client.fetch(query)
    .then((data)=>{
      setInstitutefacilities(data);

    })
    
  }, [])
  return (
    <>
<Head name={'Institute Facilities'}/> 
<div className="cont-time" data-aos="fade-up">
    <div class="shadow p-3 mb-5 bg-white rounded media">
      <h1>Institute Facilities</h1>
      <div className="time">
        <ul>
          <li className='clock'> Last Updated</li>
          <li >  August 17, 2023</li>
          </ul>
       </div>
       <div className="instit-content">
       {
       institutefacilities?.map((curElem) => (
        <div key={curElem._id}>
        <span1>{curElem.heading}:</span1> <p>{curElem.detail}</p>
        </div>
      ))
    }
       </div>
        <hr />  
        </div>
        </div>
    </>
  )

}

export default InstituteFacilities