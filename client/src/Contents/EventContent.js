import React, {useState, useEffect} from 'react'
import "./EventContent.css"
import {Link} from 'react-router-dom'
import {  urlFor, client } from '../client'


const EventContent = () => {

  const  [events, setEvents] = useState([])

  useEffect(() => {

    const query = '*[_type == "events"]';
  
    client.fetch(query)
    .then((data)=>{
      setEvents(data);
    })
    
  }, [])
  

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };
  return (
    <>
    <div className="news-card" >
    {events.map((event)=>(
      <>
         <div class="card" key={event._id}>
         {event.fimage && <img src={urlFor(event.fimage)} class="card-img-top" alt="..." />}
         <div class="card-body card-text-my">
         <Link onClick={scrollToTop} to={`/eventDetail/${event._id}`}><h5 class="card-title">{event.name}</h5> </Link>
           <div class="card-text card-text-my">
             <p>GOVT. GRADUATE COLLEGE OF COMMERCE KHANEWAL</p>
           </div>
           <hr />
           <Link onClick={scrollToTop} to={`/eventDetail/${event._id}`}>
           <p className='more-detail'>More Details</p>
           </Link>
         </div>
       </div>
    </>
            )
            )}
</div>
    </>
  )
}

export default EventContent