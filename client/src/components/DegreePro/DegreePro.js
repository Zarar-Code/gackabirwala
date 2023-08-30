import React from 'react'
import Head from '../../container/Head'
import DegreeProgram from '../../Contents/DegreeProContent'


const DegreePro = () => {
  return (
    <>
<Head name={'Degree Programs'}/> 
<div className="cont-time" data-aos="fade-up">
  <DegreeProgram/>
    </div>
    </>
  )
}

export default DegreePro