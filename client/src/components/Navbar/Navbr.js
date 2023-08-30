import React from 'react'
import { NavLink } from 'react-router-dom'
import { CgMenu , CgClose} from 'react-icons/cg'
import { useState } from 'react'

import styled from 'styled-components';
import "./Nav.css"

const Navbr = () => {
  const [menuIcon, setMenuIcon] = useState();

  const Nav = styled.nav`
  .navbar{
    display :flex;
    justify-content:center;
  }
  .navbar-lists {
    display: flex;
    gap: 1.8rem;
    align-items: center;
    

    .navbar-link {
      &:link,
      &:visited {
        display: inline-block;
        text-decoration: none;
        font-size: 0.9rem;
        font-weight: 500;
        text-transform: uppercase;
        color: ${({ theme }) => theme.colors.black};
        transition: color 0.3s linear;
      }

      &:hover,
      &:active {
        color: white;
      }
    }
  }

  .mobile-navbar-btn {
    display: none;
    background-color: transparent;
    cursor: pointer;
    border: none;
  }

  .mobile-nav-icon[name="close-outline"] {
    display: none;
  }

  .close-outline {
    display: none;
  }

  .cart-trolley--link {
    position: relative;

    .cart-trolley {
      position: relative;
      font-size: 3.2rem;
    }

    .cart-total--item {
      width: 2.4rem;
      height: 2.4rem;
      position: absolute;
      background-color: #000;
      color: white;
      border-radius: 50%;
      display: grid;
      place-items: center;
      top: -20%;
      left: 70%;
      background-color:  rgb(30, 97, 105);;
    }
  }

  .user-login--name {
    text-transform: capitalize;
  }

  .user-logout,
  .user-login {
    font-size: 1.4rem;
    padding: 0.8rem 1.4rem;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .mobile-navbar-btn {
      display: inline-block;
      z-index: 9999;
      border: ${({ theme }) => theme.colors.white};

      .mobile-nav-icon {
        font-size: 2.2rem;
        margin-right:10px;
        color: ${({ theme }) => theme.colors.white};
      }
    }
    .navbar{
      justify-content: end;
    }
    .active .mobile-nav-icon {
      display: none;
      font-size: 2.2rem;
      position: absolute;
      top: 40%;
      right: 5%;
      color: ${({ theme }) => theme.colors.white};
      z-index: 9999;
      
    }

    .active .close-outline {
      display: inline-block;
    }

    .navbar-lists {
      top: -15px;
      width: 100%;
      height: 100vh;
      position: absolute;
      
      left: 0;
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      visibility: hidden;
      opacity: 0;
      /* transform-origin: top; */
    }

    .active .navbar-lists {
      background-color: #1f1f1f;
      visibility: visible;
      opacity: 1;
      z-index: 999;
      transform-origin: right;

      .navbar-link {
        font-size: 1rem;
      }
    }
    .cart-trolley--link {
      position: relative;
    }

    .user-logout,
    .user-login {
      font-size: 2.2rem;
      padding: 0.8rem 1.4rem;
    }
  }
`;
  return (
    <>
    <Nav>
    <div className={menuIcon ? "navbar active" : "navbar"} >
        <ul className='navbar-lists '>
            <li class="nav-item dropdown">
            <NavLink to="/" onClick={()=>setMenuIcon(false)} class="nav-link dropdown-toggle " 
              >
          Home
          </NavLink>
            </li>
            <li class="nav-item dropdown">
            <NavLink to="" class="nav-link dropdown-toggle"   role="button" data-bs-toggle="dropdown" aria-expanded="false">
          ACADEMICS
          </NavLink>
            <ul class="dropdown-menu">
            <li><NavLink  to="/departments"  onClick={()=>setMenuIcon(false)}  class="dropdown-item">Departments</NavLink></li>
            <li><NavLink  to="/degrees" onClick={()=>setMenuIcon(false)}  class="dropdown-item">Degrees</NavLink></li>
            <li><NavLink  to="/degreePrograms"  onClick={()=>setMenuIcon(false)} class="dropdown-item">Degree Programs</NavLink></li>
            <li><NavLink  to="/faculty"  onClick={()=>setMenuIcon(false)} class="dropdown-item">Faculty</NavLink></li>
            <li><NavLink to="/timeTable" onClick={()=>setMenuIcon(false)}  class="dropdown-item">Time Table</NavLink></li>
            <li><NavLink to="/dateSheets" onClick={()=>setMenuIcon(false)}  class="dropdown-item">Date Sheets</NavLink></li>
            <li><NavLink to="/examResults"  onClick={()=>setMenuIcon(false)} class="dropdown-item">Exam Results</NavLink></li>
          </ul>
            </li>
            <li class="nav-item dropdown">
            <NavLink to="" class="nav-link dropdown-toggle"   role="button" data-bs-toggle="dropdown" aria-expanded="false">
            ADMISSIONS
            </NavLink>
            <ul class="dropdown-menu">
            <li><NavLink to="/feeStructure"  onClick={()=>setMenuIcon(false)} class="dropdown-item"  >Fee Structure</NavLink></li>
            <li><NavLink to="/admissionCriteria"  onClick={()=>setMenuIcon(false)} class="dropdown-item"  >Admission Criteria</NavLink></li>
            <li><NavLink to="/admissionProcess" onClick={()=>setMenuIcon(false)}  class="dropdown-item"  >Admission Process</NavLink></li>
            <li><NavLink to="/studentLife" onClick={()=>setMenuIcon(false)}  class="dropdown-item"  >Student Life</NavLink></li>
            <li><NavLink to="/currentEnrollment" onClick={()=>setMenuIcon(false)}  class="dropdown-item"  >Current Enrollment</NavLink></li>
          </ul>
            </li>
            <li class="nav-item dropdown">
            <NavLink to="" class="nav-link dropdown-toggle"   role="button" data-bs-toggle="dropdown" aria-expanded="false">
            NEWS & EVENTS
            </NavLink>
            <ul class="dropdown-menu">
            <li><NavLink onClick={()=>setMenuIcon(false)} to="/LatestNews" class="dropdown-item"  >Latest News</NavLink></li>
            <li><NavLink onClick={()=>setMenuIcon(false)} to="/LatestEvents" class="dropdown-item"  >Latest Events</NavLink></li>
          </ul>
            </li>
            <li class="nav-item dropdown">
            <NavLink to="/downloads" onClick={()=>setMenuIcon(false)} class="nav-link dropdown-toggle"   >
            DOWNLOAD
          </NavLink>
            </li>
            <li class="nav-item dropdown">
            <NavLink to="/gallery" onClick={()=>setMenuIcon(false)} class="nav-link dropdown-toggle"   >
            GALLERY
          </NavLink>
            </li>
            <li class="nav-item dropdown">
            <NavLink to="" class="nav-link dropdown-toggle"   role="hover" data-bs-toggle="dropdown" aria-expanded="false">
            ABOUT
            </NavLink>
            <ul class="dropdown-menu">
            <li><NavLink onClick={()=>setMenuIcon(false)} to="/aboutUs" class="dropdown-item">About Us</NavLink></li>
            <li><NavLink onClick={()=>setMenuIcon(false)} to="/contactUs" class="dropdown-item">Contact Us</NavLink></li>
            {/* <li><NavLink onClick={()=>setMenuIcon(false)} to="/morals" class="dropdown-item">MORAL RESTRICTION</NavLink></li> */}
            <li><NavLink onClick={()=>setMenuIcon(false)} to="/instituteFacilities" class="dropdown-item">Institute Facilities</NavLink></li>
            <li><NavLink onClick={()=>setMenuIcon(false)} to="/nonTeachingStaff" class="dropdown-item">Non Teaching Staff</NavLink></li>
            <li><NavLink onClick={()=>setMenuIcon(false)} to="/vacancyPositions" class="dropdown-item">Vacancy Positions</NavLink></li>
          </ul>
            </li>
            {/* <li class=" dropdown main_btn">
            <NavLink to="/login" onClick={()=>setMenuIcon(false)} class="nav-link dropdown-toggle"   >
            <button className="">INSTITUTE LOGIN</button>
          </NavLink>
          </li> */}
        </ul>
        <div className='mobile-navbar-btn'>
        <CgMenu name='menu-outline' className="mobile-nav-icon" onClick={()=>setMenuIcon(true)}/>
        <CgClose name='close-outline' className="mobile-nav-icon close-outline" onClick={()=>setMenuIcon(false)}/>
        </div>
    </div>
    </Nav>
    </>
  )
}

export default Navbr