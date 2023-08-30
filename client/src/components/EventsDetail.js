import Head from "../container/Head";
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { urlFor, client } from '../client';
import { HashLoader } from "react-spinners";

const EventsDetail = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const query = `*[_type == "events" && _id == "${id}"]`;

    client.fetch(query)
      .then((data) => {
        if (data && data.length > 0) {
          setEvent(data[0]);
        }
        setLoading(false); 
      });
  }, [id]);

  if (loading) {
    return (
      <>
      <Head name={"Events Detail"} />
      <div className="loading-spinner">
      <HashLoader color="#5159ff" loading={loading} size={40} />
      </div>
      </>
    );
  }

  if (!event) {
    return <p>No event Avaliable.</p>;
  }
  return (
    <div>
      <Head name={"Events Detail"} />
      <div className="cont-time" data-aos="fade-up">
    <div class="shadow p-3 mb-5 bg-white rounded media">
      <h1>{event.name}</h1>
      <div className="time">
        <ul>
        <li className='clock'> Last Updated</li>
          {/* <li >{format(lastUpdated, 'MMMM dd, yyyy')}</li> */}
          <li >August 17 2023</li>
          </ul>
       </div>
       <div className="event_detail">
        <p>{event.detail}</p>  
        </div>
        <div className="gallery-cont" data-aos="fade-up">
        {
      event.eventImages?.map((curElem)=>{
        return(
        <>
         <img src={urlFor(curElem.image)} alt="" />
        </>
        )
      })
    }
    </div>
        <hr />  
    </div>
    </div>
    </div>
  );
};

export default EventsDetail;
