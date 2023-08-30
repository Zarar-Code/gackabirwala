import React, { useState ,useEffect  } from 'react'
import {urlFor ,client} from '../client'
import { HashLoader } from "react-spinners";
import './DegreeProContent.css'
import {Link} from "react-router-dom"

const DegreeProContent = () => {

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
  return (
      <>
      <h3>Our Academic Degrees & Programs</h3>
      <p style={{marginLeft:"20px"}}>We offer a range of intermediate and bachelor degree programs in fields of commerce</p>
      <div className="degreePro-cont">
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
        <div className="all-degree" data-aos="fade-up">
        {
        filterWork.map((curElem)=>{
            return(
            <>
        <div className="containere invi-degree" data-aos="fade-up" key={curElem._id}>
    {curElem.dimage && <img src={urlFor(curElem.dimage)} alt="department" />}
    <p className="title">{curElem.name}</p>
    <div className="overlay"></div>
<Link to={`/degreeProgam/${curElem._id}`} onClick={scrollToTop} className="button">Details</Link>
        </div>

    </>
    )
})
}
</div>
</div>
    </>
  )
}

export default DegreeProContent