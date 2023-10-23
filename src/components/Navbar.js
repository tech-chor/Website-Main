import React,{useState} from "react";
import { Link, NavLink } from "react-router-dom";
import LogoS from "./images/logo1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleInfo,
  faEnvelope,
  faHome,
  faToolbox,
  faUser,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {

  const [windowHeight, setWindowHeight] = useState(window.innerHeight);//it will provide the height of window on which it is displaying the content
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);//it will provide the width of window on which it is displaying the content

  window.addEventListener('resize', () => {
    setWindowHeight(window.innerHeight);
    setWindowWidth(window.innerWidth);
  });

  return (
    <div className="nav-bar">
      <Link to="/">
        <img className="logo" src={LogoS} alt="" style={{width:'150px'}}/>
      </Link>

      <nav className="nav-links">
        <NavLink exact={true} activeClassName="active" className="home-link" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>

        <NavLink
          exact={true}
          activeClassName="active"
          className="services-link"
          to="/services"
        >
          <FontAwesomeIcon icon={faToolbox} color="#4d4d4e" />
        </NavLink>

        <NavLink
          exact={true}
          activeClassName="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faCircleInfo} color="#4d4d4e" />
        </NavLink>

        <NavLink
          exact={true}
          activeClassName="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>

      
    </div>
  );
};

export default Navbar;
