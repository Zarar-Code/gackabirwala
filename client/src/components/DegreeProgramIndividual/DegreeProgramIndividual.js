import Head from "../../container/Head";
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { urlFor,  client } from '../../client';
import { HashLoader } from "react-spinners";
import "./DegreeProgramIndividual.css"
import DegreeProContent from '../../Contents/DegreeProContent'


const DegreeProgramIndividual = () => {

  const { id } = useParams();
  const [degrees, setDegrees] = useState(null);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const query = `*[_type == "degrees" && _id == "${id}"]`;

    client.fetch(query)
      .then((data) => {
        if (data && data.length > 0) {
          setDegrees(data[0]);
        }
        setLoading(false); 
      });
  }, [id]);

  if (loading) {
    return (
      <>
      <Head name={"Degree Program"} />
      <div className="loading-spinner">
      <HashLoader color="#5b7c99" loading={loading} size={40} />
      </div>
      </>
    );
  }

  if (!degrees) {
    return <p>No Data Avaliable.</p>;
  }

  return (
    <>
    <Head name={'Degree Program'} name1={degrees.name}/> 
    <div className="cont-time" data-aos="fade-up">
    <div class="shadow p-3 mb-5 moi bg-white rounded media">
      <h1>{degrees.name}</h1>
      <div className="time">
        <ul>
        <li className='clock'> Last Updated</li>
          <li >  August 17, 2023</li>
          </ul>
      </div>
      <h1>Degree Programs</h1>
   
      {
      degrees.degreeprograms?.map((curElem, index)=>{
        return(
          <>
          <p>{curElem.name}</p>
        {curElem.dsimage && <img src={urlFor(curElem.dsimage)} alt="" /> }
        </>
        )
      })
    }
        <hr/>  
    </div>
    </div>
    <DegreeProContent/>
    </>
  )
}

export default DegreeProgramIndividual