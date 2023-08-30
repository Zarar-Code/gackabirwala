import React from 'react'
import Head from '../../container/Head'
import "./CurrentEnrollment.css"

const CurrentEnrollment = () => {
  return (
    <>
    <Head name={'Current Enrollment'}/> 
    <div className="cont-time" data-aos="fade-up">
    <div class="shadow p-3 mb-5 bg-white rounded media">
      <h1>Current Enrollment</h1>
      <div className="time">
        <ul>
        <li className='clock'> Last Updated</li>
          <li >  July 05, 2023</li>
          </ul>
      </div>
      <p>No details available. The contents will be updated soon for Current Enrollments.</p>
      {/* <div className="tablee">
      <h4><span1>D-COM</span1></h4>
      <table class="table table-bordered">
  <tbody>
    <tr>
      <td colspan="2">D-COM</td>
      <td>0</td>
    </tr>
  </tbody>
      </table>
      <h4><span1>I-COM</span1></h4>
      <table class="table table-bordered">
  <tbody>
    <tr>
      <td colspan="2">I-COM</td>
      <td>0</td>
    </tr>
  </tbody>
      </table>
      </div> */}
        <hr />  
      
    </div>
    </div>
    </>
  )
}

export default CurrentEnrollment