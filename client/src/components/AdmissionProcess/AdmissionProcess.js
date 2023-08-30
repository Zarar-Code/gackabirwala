import React, {useState, useEffect} from 'react'
import Head from '../../container/Head'
import {  urlFor, client } from '../../client'
import './AdmissionProcess.css'


const AdmissionProcess = () => {
  const  [admissionp, setAdmissionp] = useState([])

  useEffect(() => {

    const query = '*[_type == "admissionp"]';
  
    client.fetch(query)
    .then((data)=>{
      setAdmissionp(data);

    })
    
  }, [])
  return (
    <>
    <Head name={'Admission Process'}/> 
    <div className="cont-time" data-aos="fade-up">
    <div class="shadow p-3 mb-5 bg-white rounded media">
      <h1>Admission Process</h1>
      <div className="time">
        <ul>
        <li className='clock'> Last Updated</li>
          <li > August 17, 2023</li>
          </ul>
      </div>
      <div className='admission_detail'>The admissions process at the college is highly competitive, with a rigorous selection criteria to ensure that we admit the most qualified students. Applicants are required to submit an online application and provide supporting documents, such as transcripts, test scores, and required degrees
       </div>
        <p className='admission_para'> <span1>Contact information: </span1>If you have any questions or need assistance with the admissions process, please contact our admissions office."</p>  
        {admissionp?.map((curElem) => (
  <div key={curElem._id}>
    <div>
      <div className="mid_pic">
          <img src={urlFor(curElem.admissionpimg)} alt="ResultImage" />
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

export default AdmissionProcess