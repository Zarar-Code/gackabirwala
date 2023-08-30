import React, {useState, useEffect} from 'react'
import Head from '../../container/Head'
import {  urlFor, client } from '../../client'

const ExamResults = () => {
  const  [results, setResults] = useState([])

  useEffect(() => {

    const query = '*[_type == "results"]';
  
    client.fetch(query)
    .then((data)=>{
      setResults(data);

    })
    
  }, [])
  return (
    <>
<Head name={'Examination Result'}/> 
<div className="cont-time" data-aos="fade-up">
    <div class="shadow p-3 mb-5 bg-white rounded media">
      <h1>Examination Result</h1>
      <div className="time">
        <ul>
          <li className='clock'> Last Updated</li>
          <li >  August 17, 2023</li>
          </ul>
       </div>

       {
       results.map((curElem) => (
  <div key={curElem._id}>
    {curElem.name && curElem.resultimag ? (
      <div>
        <p className='criteria_timetable'>{curElem.name}</p>
        <div className="mid_pic">
          <img src={urlFor(curElem.resultimag)} alt="ResulImage" />
        </div>
        </div>
     ) : (
      <div>
        <p>No data available</p>
        </div>
      ) 
     } 
  </div>
))}

        <hr />  
      
    </div>
    </div>
    </>
  )
}

export default ExamResults