import React from 'react'
import { useParams } from 'react-router-dom'
// import data from '../Api/data'

const DepartmentContent = () => {
    // const {id } = useParams()
    // const department = data.find((dept) => dept.id.toString() === id);
    return (
        <>
         {/* <h3>Department-{department.name}</h3> */}
    <div className="cont-time" data-aos="fade-up">
    <div class="shadow p-3 mb-5 bg-white rounded media">
      {/* <img src={department.Image} alt="" />
      <h1>{department.name}</h1> */}
      <div className="time">
        <ul>
          <li> Last Updated</li>
          <li >  May 29, 2023</li>
          </ul>
       </div>
        <hr />  
    </div>
    </div>
        </>
        
    );
    }


export default DepartmentContent