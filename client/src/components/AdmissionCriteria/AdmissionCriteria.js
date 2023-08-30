import React, {useState, useEffect} from 'react'
import Head from '../../container/Head'
import {  urlFor, client } from '../../client'
import './AdmissionCriteria.css'

const AdmissionCriteria = () => {
  const  [admissionc, setAdmissionc] = useState([])

  useEffect(() => {

    const query = '*[_type == "admissionc"]';
  
    client.fetch(query)
    .then((data)=>{
      setAdmissionc(data);

    })
    
  }, [])

  return (
    <>
    <Head name={'Admission Criteria'}/> 
    <div className="cont-time" data-aos="fade-up">
    <div class="shadow p-3 mb-5 bg-white rounded media">
      <h1>Admission Criteria</h1>
      <div className="time">
        <ul>
          <li className='clock'> Last Updated</li>
          <li >  August 17, 2023</li>
          </ul>
       </div>
       <p className='criteria'>قواعدوضوابط</p>
       {admissionc?.map((curElem) => (
  <div key={curElem._id}>
    <div>
      <div className="mid_pic">
          <img src={urlFor(curElem.admissioncimg)} alt="ResultImage" />
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

export default AdmissionCriteria