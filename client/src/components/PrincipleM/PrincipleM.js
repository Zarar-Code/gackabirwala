import React, {useState, useEffect} from 'react'
import {  urlFor, client } from '../../client'
import ReadMoreReact from 'read-more-react';
import './PrincipleM.css'

const PrincipleM = () => {
  const  [pricipal, setPricipal] = useState([])

  useEffect(() => {

    const query = '*[_type == "principal"]';
  
    client.fetch(query)
    .then((data)=>{
      setPricipal(data);
    })
    
  }, [])
  return (
    <>
     {
     pricipal?.map((curElem)=>(
      <>
    <div className="principle_M_cont" data-aos="fade-up">
        <div className="pContent">
       <h2>{curElem.name}</h2>
        <h5>{curElem.stdname}</h5>
        <p><ReadMoreReact text={curElem.message}
            min={50}
            ideal={200}
            max={2000}
            readMoreText={"Read More..."}
            /></p>
        </div>
        <div className="pImage">
           {curElem.pimage && <img src={urlFor(curElem.pimage)} alt="" /> } 
            <h5>PRINCIPAL</h5>
        </div>
    </div>
    </>
     ))
    }
    </>
  )
}

export default PrincipleM