import React from "react";
import './Style.css'
import Ecell1 from '../../Assets/Ecell1.png'
import { NavLink } from "react-router-dom";

export default function Navbar({setloginuser}) {
  return (
    <>
    
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark modify">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {/* <img src={Ecell1} height="90px" width="90px" alt="" /> */}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-10 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link h" aria-current="page" href="#">
                  About Us
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link h" href="#">
                  What we do?
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle h"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Initiatives
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item h" href="#">
                      Team Up
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item h" href="#">
                      Start Up Series
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item h" href="#">
                      Developement Drives
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item h" href="#">
                      Campus Ambasador Programs
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item h" href="#">
                      ALL EVENTS
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link h" href="#">
                  Contact Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link h" href="#">
                  Past Sponsors
                </a>
              </li>
              <li className="nav-item h">
                <a className="nav-link h" href="#">
                  Team
                </a>
              </li>
              <li className="nav-item h">
                <a onClick={()=>setloginuser({})} className="nav-link h" href="">
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
