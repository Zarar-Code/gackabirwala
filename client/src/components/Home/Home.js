import React, {useState, useEffect} from 'react'
import {  client } from '../../client'
import "./home.css";
import { motion } from "framer-motion";
import Content from "./Content";
import { DotLoader  } from "react-spinners";

const Home = () => {
  const  [instituteName, setInstituteName] = useState('')
  const [loading, setLoading] = useState(true)


  useEffect(() => {

    const query = '*[_type == "instituteName"]';
  
    client.fetch(query)
    .then((data)=>{
      if (data.length > 0) {
        setInstituteName(data[0].name); // Update state with the name
      }
      setLoading(false); 
    })
    
  }, [])

  const scrollToContent = () => {
    window.contentRef.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="contanier">
        <header>
          <section>
            <h1 className="home-heading" data-aos="zoom-in-up">
              <spanhome>WELCOME TO</spanhome><br />
              {instituteName || (
  <>
    {loading ? (
      <div className="loading-spinner">
        <DotLoader  color="#5159ff" loading={loading} size={40} />
      </div>
    ) : null}
  </>
)}
            </h1>
            <motion.div
              className="bar"
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 80 }}
            ></motion.div>
            <div className="qoute">
              <h2>It is not about perfect<br/> It is about effort
              </h2>
              <motion.div
              className="home_main_btn"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, type: "spring" }}
            >
              <button className="main_btn_text" onClick={scrollToContent}>Principal Message</button>
            </motion.div>
            </div>
            
          </section>
        </header>
      </div>
      <Content />
    </>
  );
};

export default Home;
