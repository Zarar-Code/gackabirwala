import React, { useState ,useEffect  } from 'react'
import PrincipleM from '../PrincipleM/PrincipleM'
import { client } from '../../client'
import Pride from '../Pride/Pride'
import Slider from '../../Contents/Slider'
import './content.css'
import Slider2 from '../../Contents/Slider2'


const Content = () => {

  const [activeFilter, setActiveFilter] = useState("");
  const  [message, setMessage] = useState([])
  const [filterWork, setFilterWork] = useState([])

  useEffect(() => {
    const query = '*[_type == "vision"]';
  
    client.fetch(query)
    .then((data)=>{
      setMessage(data);
      // setFilterWork(data);
    })
    
  }, [])

  const handleWorkFilter=(item)=>{
    setActiveFilter(item);
        setFilterWork(message.filter((message)=>message.tags.includes(item)))

  }


  return (
    <>
    <div ref={(ref) => (window.contentRef = ref)}>
      <PrincipleM/>
    </div>
    <div className="message-container">
      <div className="message-btn">
      {['History' , 'Mission', 'Vision'].map((item , index)=>(
        <div
        key={index}
        onClick={()=> handleWorkFilter(item)}
        className={`message-inside-btn ${activeFilter === item ? 'active' : ''}`}
        >
          {item.toUpperCase()}
        </div>
      ))}
        </div>
        <div className="message-real-content">
        {
        filterWork.map((curElem)=>{
            return(
            <>
        <div className="message-real " key={curElem.id}>
        <div className='urdu'>
          <h2>{curElem.head}</h2>
          <p>{curElem.message}</p>
          </div>
        </div>
 
    </>
    )
  })
}
  </div>
</div>
<div className="cont-time home-degree" data-aos="fade-up">
      <Slider2/>
</div>
      <div className="cont-time home-new" data-aos="fade-up">
      <h3>Latest Events</h3>
    <p>Here are institute's Latest Events</p>
      <Slider/>
</div>
      <div className="cont-time home-degree" data-aos="fade-up">
      <h3>Institute Wall of Pride</h3>
    <p>Our Allumni are now playing their role in different departments nationwide.</p>
      <Pride/>
</div>
    </>
  )
}

export default Content