import React from 'react'
import "./ContentNot.css"
import '@fortawesome/fontawesome-free/css/all.css';

const ContentNot = (props) => {
    const {name , detail} = props
  return (
    <>
    <div className="cont-time" data-aos="fade-up">
    <div class="shadow p-3 mb-5 bg-white rounded">
      <h1>{name}</h1>
      <div className="time">
        <ul>
          <li className='clock'> Last Updated</li>
          <li >  July 05, 2023</li>
          </ul>
       </div>
        <p>{detail}</p>  
        <hr />  
      
    </div>
    </div></>
  )
}

export default ContentNot