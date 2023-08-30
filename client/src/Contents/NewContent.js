import React, {useState, useEffect} from 'react'
import {  urlFor, client } from '../client'
import "./NewContent.css"
import {Link} from 'react-router-dom'


const NewContent = () => {

    const  [news, setNews] = useState([])
  
    useEffect(() => {
  
      const query = '*[_type == "news"]';
    
      client.fetch(query)
      .then((data)=>{
        setNews(data);
      })
      
    }, [])
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };
  
  return (
    <>
    <div className="news-card" >
    {
        news.map((curElem)=>{
    return(
      <div className="card" key={curElem._id}>
        {curElem.nimage && <img src={urlFor(curElem.nimage)} className="card-img-top" alt="..."/>}
        <div className="card-body">
        <Link onClick={scrollToTop} to={`/newDetail/${curElem._id}`}><h5 className="card-title">{curElem.name}</h5> </Link>
        <div class="card-text">
             <p>GOVT. GRADUATE COLLEGE OF COMMERCE KHANEWAL</p>
           </div>
          <hr />
          <Link onClick={scrollToTop} to={`/newDetail/${curElem._id}`}>
          <p>Read More</p>
          </Link>
        </div>
      </div>
    )
  })
}
  </div>
    </>
  )
}

export default NewContent