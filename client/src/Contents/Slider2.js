import React, { useState ,useEffect  } from 'react'
import {urlFor ,client} from '../client'
import { HashLoader } from "react-spinners";
import './DegreeProContent.css'
import {Link} from "react-router-dom"
import Carousel from 'react-multi-carousel';

const Slider2 = () => {

    const [activeFilter, setActiveFilter] = useState("All");
    const  [degrees , setDegrees] = useState([])
    const [filterWork, setFilterWork] = useState([])
  const [loading, setLoading] = useState(true)
  const [availableTags, setAvailableTags] = useState([]);

    useEffect(() => {
        const query = '*[_type == "degrees"]';
      
        client.fetch(query)
        .then((data) => {
          setDegrees(data);
          setFilterWork(data);
          const allTags = [...new Set(data.flatMap(item => item.tags))];
          setAvailableTags(allTags);
        })
        .finally(() => setLoading(false));
    }, []);

    if (loading) {
      return (
        <>
        <div className="loading-spinner">
        <HashLoader color="#89c053" loading={loading} size={40} />
        </div>
        </>
      );
    }
      const handleWorkFilter=(item)=>{
        setActiveFilter(item);
            setFilterWork(degrees.filter((degrees)=>degrees.tags.includes(item)))
      }

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
          items: 4
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
        <>
        <div className="degreePro-btn">
        {[ ...availableTags].map((item, index) => (
          <div
            style={{ cursor: "pointer" }}
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`degree-btn ${activeFilter === item ? "active" : ""}`}
          >
            {item.toUpperCase()}
          </div>
        ))}
      </div>
        <Carousel className="slider" responsive={responsive}
        showDots={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        infinite={true}
        draggable={false}
        ssr={true}
        removeArrowOnDeviceType={ "mobile"}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        >
            
            {
        filterWork.map((curElem)=>{
            return(
            <>
              <div class="card_crusel" style={{width: "1rem;"}} key={curElem._id}>
        <div className="containere invi-degree" data-aos="fade-up" key={curElem._id}>
    <img src={urlFor(curElem.dimage)} alt="department" />
    <p className="title">{curElem.name}</p>
    <div className="overlay"></div>
<Link to={`/degreeProgam/${curElem._id}`} onClick={scrollToTop} className="button">Details</Link>
        </div>
        </div>
    </>
    )
})
}

        </Carousel>
        </>
      );
    }

export default Slider2