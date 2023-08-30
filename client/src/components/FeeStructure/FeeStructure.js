import React, {useState, useEffect} from 'react'
import Head from '../../container/Head'
import {  urlFor, client } from '../../client'
import "./FeeStructure.css"
const FeeStructure = () => {
  const  [feestructure, setFeestructure] = useState([])

  useEffect(() => {

    const query = '*[_type == "feestructure"]';
  
    client.fetch(query)
    .then((data)=>{
      setFeestructure(data);

    })
    
  }, [])
  // console.log(feestructure)
  return (
    <>
<Head name={'Fee Structure'}/> 
<div className="cont-time" data-aos="fade-up">
    <div class="shadow p-3 mb-5 bg-white rounded media">
      <h1>Fee Structure</h1>
      <div className="time">
        <ul>
          <li className='clock'> Last Updated</li>
          <li>  August 17, 2023</li>
          </ul>
       </div>
       <p>The rate of fee time to time changed as per direction of the high-ups under the rules and policy.</p>
       {feestructure?.map((curElem) => (
  <div key={curElem._id}>
    <div>
      <div className="mid_pic">
          <img src={urlFor(curElem.feestructureimg)} alt="ResultImage" />
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

export default FeeStructure