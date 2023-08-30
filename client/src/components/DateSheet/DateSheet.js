import React, {useState, useEffect} from 'react'
import Head from '../../container/Head'
import {  urlFor, client } from '../../client'

const DateSheet = () => {
  const  [datesheet, setDatesheet] = useState([])

  useEffect(() => {

    const query = '*[_type == "datesheet"]';
  
    client.fetch(query)
    .then((data)=>{
      setDatesheet(data);
    })
    
  }, [])
  return (
    <>
<Head name={'Date Sheet'}/> 
<div className="cont-time" data-aos="fade-up">
    <div class="shadow p-3 mb-5 bg-white rounded media">
      <h1>Date Sheet</h1>
      <div className="time">
        <ul>
          <li className='clock'> Last Updated</li>
          <li >  Auhust 17, 2023</li>
          </ul>
       </div>

       {
       datesheet.map((curElem) => (
  <div key={curElem._id}>
    {curElem.name && curElem.datesheetimg ? (
      <div>
        <p className='criteria_timetable'>{curElem.name}</p>
        <div className="mid_pic">
          <img src={urlFor(curElem.datesheetimg)} alt="TimeTableImage" />
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
export default DateSheet