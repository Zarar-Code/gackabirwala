import React from 'react'
import Head from '../../container/Head';
import "./deparments.css"

// import DepartmentsContent from '../../Contents/DepartmentsContent'
// import './departments.css'

const Departments = () => {
  return (
    <div>
      <Head name={'Departments'}/>
      <div className="main-cont" data-aos="fade-up" >
      <h3>Our Academic Departments</h3>
        <p>We offer a range of undergraduate and graduate degree programs <br />under the umbrella of following departments.</p>
        <p>No details available for Deparments.</p>
      {/* <DepartmentsContent/> */}
    </div>
    </div>
  )
}

export default Departments