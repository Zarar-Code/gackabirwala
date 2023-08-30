import React, {useState, useEffect} from 'react'
import {urlFor, client} from '../../client'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Pride.css'

const Pride = () => {
  const  [pride, setPride] = useState([])

  useEffect(() => {

    const query = '*[_type == "pride"]';
  
    client.fetch(query)
    .then((data)=>{
      setPride(data);
    })
    
  }, [])
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
        pride.map((curElem)=>{
    return(
        <>
        <div className="top">
        <div className="Pride_card">
      <div class="pride" style={{width: "1rem;"}} key={curElem.id}>
        {curElem.prideimage && <img src={urlFor(curElem.prideimage)} class="" alt="..."/> }
        <div class="card-body pride_body">
            <h5>{curElem.name}</h5>
            <h6>{curElem.session}</h6>
            </div>
            </div>
       <p class="card-text">
       {curElem.designation}
     </p>
      </div>
      </div>
     </>
    )
})
}
        </Carousel>
  )
}

export default Pride