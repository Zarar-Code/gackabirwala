import Head from "../container/Head";
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { urlFor, client } from '../client';
import { HashLoader } from "react-spinners";

const NewsDetail = () => {
  const { id } = useParams();
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const query = `*[_type == "news" && _id == "${id}"]`;

    client.fetch(query)
      .then((data) => {
        if (data && data.length > 0) {
          setNews(data[0]); 
          // setLastUpdated(new Date());
        }
        setLoading(false); 
      });
  }, [id]);

  if (loading) {
    return (
      <>
      <Head name={"Events Detail"} />
      <HashLoader className="load" color="#5159ff" loading={loading} size={40} />
      </>
    );
  }

  if (!news) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <Head name={"News Details"}  />
      <div className="cont-time" data-aos="fade-up">
    <div class="shadow p-3 mb-5 bg-white rounded media">
      <h1>{news.name}</h1>
      <div className="time">
        <ul>
        <li className='clock'> Last Updated</li>
          <li > August 17, 2023</li>
          </ul>
       </div>
       <div className="event_detail">
        <p>{news.detail}</p>  
        </div>
       {
      news.newsImage?.map((curElem)=>{
        return(
        <>
         <img src={urlFor(curElem.image)} alt="" />
        </>
        )
      })
    }
        <hr />  
    </div>
    </div>

    </>
  );
};

export default NewsDetail;
