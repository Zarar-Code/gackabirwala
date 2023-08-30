import React from 'react'
import Head from '../../container/Head'
import './Gallery.css'
import GalleryContent from'../../Contents/GalleryContent'


const Gallery = () => {
  return (
    <>
<Head name={'Gallery'}/> 
    <div className="cont-time" data-aos="fade-up">
  <GalleryContent/>
    </div>
    </>
  )
}

export default Gallery