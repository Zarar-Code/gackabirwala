import React from 'react'
import Head from '../../container/Head'
import EventContent from '../../Contents/EventContent'

const LatestEvents = () => {
  return (
    <>
<Head name={'Latest Events'}/> 
<div className="news-div" data-aos="fade-up">
<h3>Latest Events</h3>
    <p>Here are institute's Latest Events</p>
<EventContent/>
</div>
    </>
  )
}

export default LatestEvents