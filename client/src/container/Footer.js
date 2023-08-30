import React, {useState, useEffect} from 'react'
import {  client } from '../client'
import "./Footer.css"
import {Link} from 'react-router-dom'

const Footer = () => {
  const  [footer, setFooter] = useState('')

  useEffect(() => {

    const query = '*[_type == "footer"]';
  
    client.fetch(query)
    .then((data)=>{
      if (data.length > 0) {
        setFooter(data[0]);
      }
    })
  }, [])
  console.log(footer)
  useEffect(() => {
   
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <>
<footer class="footer-area footer--light muted" >
  <div class="footer-big my-style"  >
        <div class="col-md-3 col-sm-12 footer-detail">
          <div class="footer-widget">
            <div class="widget-about ">
              {/* <img src="http://placehold.it/250x80" alt="" class="img-fluid"/> */}
              <p>{footer.name}<br />
              {footer.email}<br />
              {footer.number}<br />
                </p>
            </div>
          </div>
        </div>
        <div class="col-md-3 col-sm-4">
          <div class="footer-widget">
            <div class="footer-menu ">
              <h4 class="footer-widget-title">ACADEMICS</h4>
              <ul >
                <li>
                  <Link className="link" onClick={scrollToTop} to="/departments" >Departments</Link>
                </li>
                <li>
                  <Link className="link" onClick={scrollToTop} to="/degrees" >Degrees</Link>
                </li>
                <li>
                  <Link className="link" onClick={scrollToTop} to="/degreePrograms" >Degree Programs</Link>
                </li>
                <li>
                  <Link className="link" onClick={scrollToTop} to="/faculty" >Faculty</Link>
                </li>
                <li>
                  <Link className="link" onClick={scrollToTop} to="/timeTable" >Time Table</Link>
                </li>
                <li>
                  <Link className="link" onClick={scrollToTop} to="/dateSheets" >Date Sheets</Link>
                </li>
                <li>
                  <Link className="link" onClick={scrollToTop} to="/examResults" >Exam Results</Link>
                </li>
              </ul>
            </div>
            {/* <!-- end /.footer-menu --> */}
          </div>
          {/* <!-- Ends: .footer-widget --> */}
        </div>
        <div class="col-md-3 col-sm-4">
          <div class="footer-widget">
            <div class="footer-menu no-padding">
              <h4 class="footer-widget-title">ADMISSIONS</h4>
              <ul>
                <li>
                  <Link className="link" onClick={scrollToTop} to="/feeStructure" >Fee Structure</Link>
                </li>
                <li>
                  <Link className="link" onClick={scrollToTop} to="/admissionCriteria" >Admission Criteria</Link>
                </li>
                <li>
                  <Link className="link" onClick={scrollToTop} to="/admissionProcess" >Admission Process</Link>
                </li>
                <li>
                  <Link className="link" onClick={scrollToTop} to="/studentLife" >Student Life</Link>
                </li>
                <li>
                  <Link className="link" onClick={scrollToTop} to="/currentEnrollment" >Current Enrollment</Link>
                </li>
              </ul>
            </div>
            {/* <!-- end /.footer-menu --> */}
          </div>
          {/* <!-- Ends: .footer-widget --> */}
        </div>

      </div>
    <hr />
  <div class="mini-footer" >
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="copyright-text">
            <p>© Copyright {footer.name} {new Date().getFullYear()} | All Rights Reserved <br />
              Developed by <Link to="https://zararportfolio.netlify.app/" className="zarar" >Zarar Haider</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>
    </>
  )
}

export default Footer