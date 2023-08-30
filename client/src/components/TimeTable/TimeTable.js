import React, {useState, useEffect} from 'react'
import Head from '../../container/Head'
import {  urlFor, client } from '../../client'
import '@fortawesome/fontawesome-free/css/all.css';
import './TimeTable.css'

const TimeTable = () => {
  const  [timetable, setTimetable] = useState([])

  useEffect(() => {

    const query = '*[_type == "timetable"]';
  
    client.fetch(query)
    .then((data)=>{
      setTimetable(data);
    })
    
  }, [])
  return (
    <>
<Head name={'Time Table'}/> 
<div className="cont-time" data-aos="fade-up">
    <div class="shadow p-3 mb-5 bg-white rounded media">
      <h1>Time Table</h1>
      <div className="time">
        <ul>
          <li className='clock'> Last Updated</li>
          <li >  August 17, 2023</li>
          </ul>
       </div>
       {timetable.map((curElem) => (
  <div key={curElem._id}>
    {curElem.name && curElem.timetableimg ? (
      <>
        <p className='criteria_timetable'>{curElem.name}</p>
        <div className="mid_pic">
          <img src={urlFor(curElem.timetableimg)} alt="TimeTableImage" />
        </div>
      </>
    ) : (
        <p>Time table will be uploaded here soon.</p>
    )}
  </div>
))}
        <hr />  
      
    </div>
    </div>
    </>
  )
}

export default TimeTable