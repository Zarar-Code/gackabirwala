import React, {useState, useEffect} from 'react'
import Head from '../../container/Head'
import { client } from '../../client'
import "./StudentLife.css"

const StudentLife = () => {
  const  [studentlife, setStudentlife] = useState([])

  useEffect(() => {

    const query = '*[_type == "studentlife"]';
  
    client.fetch(query)
    .then((data)=>{
      setStudentlife(data);

    })
    
  }, [])
  return (
    <>
<Head name={'Students Life'}/> 
<div className="cont-time" data-aos="fade-up">
    <div class="shadow p-3 mb-5 bg-white rounded media">
      <h1>Student Life</h1>
      <div className="time">
        <ul>
        <li className='clock'> Last Updated</li>
          <li >  August 17, 2023</li>
          </ul>
      </div>
      {studentlife?.map((curElem) => (
  <div key={curElem._id}>
      <ol className='student_life'>
        <li> <span1>{curElem.heading}:</span1> {curElem.detail}</li>
      </ol>
      </div>
))
}
        <hr />  
      
    </div>
    </div>
    </>
  )
}

export default StudentLife