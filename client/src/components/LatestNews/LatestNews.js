import React from 'react'
import Head from '../../container/Head'
import './LatestNews.css'
import NewContent from '../../Contents/NewContent'


const LatestNews = () => {
  return (
    <>
<Head name={'Latest News'}/> 

<div className="news-div" data-aos="fade-up">
<h3>Latest News</h3>
    <p>Here are institute's Latest News</p>
<NewContent/>
</div>
    </>

  )
}

export default LatestNews