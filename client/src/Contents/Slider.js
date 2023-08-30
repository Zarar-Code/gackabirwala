import React, {useState, useEffect} from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {Link} from 'react-router-dom'
import {  urlFor, client } from '../client'
import './Slider.css'

const Slider = () => {

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
  

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      return (
        <Carousel className="slider" responsive={responsive}
        showDots={true}
        autoPlay={true}
        autoPlaySpeed={1500}
        infinite={true}
        draggable={false}
        ssr={true}
        removeArrowOnDeviceType={ "mobile"}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        >
            
       {
       events?.map((event)=>(
        <>
      <div class="card_crusel slider_card" style={{width: "1rem;"}} key={event._id}>
      {event.fimage && <img src={urlFor(event.fimage)} class="card-img-top" alt="..." />}
        <div class="card-body slider_card_body card-text-my">
        <Link onClick={scrollToTop} to={`/eventDetail/${event._id}`}><h5 class="card-title card-name">{event.name}</h5> </Link>
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
    ))}

        </Carousel>
      );
    }

export default Slider