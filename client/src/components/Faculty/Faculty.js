import React, {useState, useEffect} from 'react'
import Head from '../../container/Head'
import {urlFor, client} from '../../client'

import "./faculty.css"

const Faculty = () => {
  const  [faculty, setFaculty] = useState([])

  useEffect(() => {

    const query = '*[_type == "faculty"]';
  
    client.fetch(query)
    .then((data)=>{
      setFaculty(data);
    })
    
  }, [])
  if (!faculty) {
    return <p>Loading...</p>;
  }
  return (
    <>
<Head name={'Faculty'}/> 
<div className="head-faculty" data-aos="fade-up">
<h3>Our Professional Faculty</h3>
    <p>Our Professional and skilled staff is working hard to teach the young ones of our community.</p>
</div>
<div className="faculty-div" >
{
  faculty.map((curElm)=>{
    return(
      <div className="ffirst" data-aos="fade-up">
        {curElm.facultyimage && <img src={urlFor(curElm.facultyimage)} alt="" srcset="" /> }
        <h5>{curElm.name}</h5>
        <p>{curElm.designation}</p>
        <p>{curElm.qualification}</p>
      </div>
    )
  })
}
  </div>
   
    </>
  )
}

export default Faculty