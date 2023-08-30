import React, {useState, useEffect} from 'react'
import Head from '../../container/Head'
import {urlFor, client} from '../../client'


const NonTeachingStaff = () => {
  const  [nonteach, setNonteach] = useState([])

  useEffect(() => {

    const query = '*[_type == "nonteach"]';
  
    client.fetch(query)
    .then((data)=>{
      setNonteach(data);
    })
    
  }, [])
  return (
    <>
<Head name={'Non Teaching Staff'}/> 
<div className="head-faculty" data-aos="fade-up">
<h3>Our Non-Teaching Staff</h3>
    <p>The non-teaching staff assist in running institute day-to-day matters.</p>
</div>
<div className="faculty-div" >
{
  nonteach.map((curElm)=>{
    return(
      <div className="ffirst" data-aos="fade-up">
        {curElm.nteachimage && <img src={urlFor(curElm.nteachimage)} alt="Non_Teaching Staff" /> }
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

export default NonTeachingStaff