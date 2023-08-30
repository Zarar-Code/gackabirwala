import React from 'react'
import {motion} from 'framer-motion'
import {Link} from "react-router-dom"
import "./Head.css"
const Head = (props) => {
  return (
    <>
     <div className="contan">
    <div className='all'>
        <motion.h1
        initial={{scale:0}}
        animate={{scale:1}}
        transition={{delay:0.2 , type:'spring'}}
        >{props.name}</motion.h1>
        <motion.div className="bar"
         initial={{scale:0}}
         animate={{scale:1}}
         transition={{delay:0.5 , duration:0.3 }}
        ></motion.div>
        <div className="sub-heading">
        <Link className="inactive "to="/">Home</Link> |
        <Link className='active' >{props.name}</Link>
        <Link className='active'>{props.name1}</Link>
        </div>
    </div>
    </div>
    </>
  )
}

export default Head